package quark

import (
	"context"
	"crypto/md5"
	"crypto/sha1"
	"encoding/hex"
	"io"
	"net/http"
	"time"

	"github.com/alist-org/alist/v3/drivers/base"
	"github.com/alist-org/alist/v3/internal/driver"
	"github.com/alist-org/alist/v3/internal/errs"
	"github.com/alist-org/alist/v3/internal/model"
	"github.com/alist-org/alist/v3/pkg/utils"
	"github.com/go-resty/resty/v2"
	log "github.com/sirupsen/logrus"
)

type QuarkOrUC struct {
	model.Storage
	Addition
	config driver.Config
	conf   Conf
}

type CombinedData struct {
	Fid        string `json:"fid"`
	Thumbnail  string `json:"thumbnail"`
	FormatType string `json:"format_type"`
	Finish     bool   `json:"finish"`
	// Add fields from model.Obj
	DirID    string    `json:"dir_id"`
	Name     string    `json:"name"`
	Size     int64     `json:"size"`
	Modified time.Time `json:"modified"`
	Path     string    `json:"path"`
	IsDir    bool      `json:"is_dir"`
	// Add other fields from model.Obj as needed
}

func (d *QuarkOrUC) Config() driver.Config {
	return d.config
}

func (d *QuarkOrUC) GetAddition() driver.Additional {
	return &d.Addition
}

func (d *QuarkOrUC) Init(ctx context.Context) error {
	_, err := d.request("/config", http.MethodGet, nil, nil)
	return err
}

func (d *QuarkOrUC) Drop(ctx context.Context) error {
	return nil
}

func (d *QuarkOrUC) List(ctx context.Context, dir model.Obj, args model.ListArgs) ([]model.Obj, error) {
	files, err := d.GetFiles(dir.GetID())
	if err != nil {
		return nil, err
	}
	return utils.SliceConvert(files, func(src File) (model.Obj, error) {
		return fileToObj(src), nil
	})
}

func (d *QuarkOrUC) Link(ctx context.Context, file model.Obj, args model.LinkArgs) (*model.Link, error) {
	data := base.Json{
		"fids": []string{file.GetID()},
	}
	var resp DownResp
	ua := d.conf.ua
	_, err := d.request("/file/download", http.MethodPost, func(req *resty.Request) {
		req.SetHeader("User-Agent", ua).
			SetBody(data)
	}, &resp)
	if err != nil {
		return nil, err
	}

	return &model.Link{
		URL: resp.Data[0].DownloadUrl,
		Header: http.Header{
			"Cookie":     []string{d.Cookie},
			"Referer":    []string{d.conf.referer},
			"User-Agent": []string{ua},
		},
		Concurrency: 2,
		PartSize:    10 * utils.MB,
	}, nil
}

func (d *QuarkOrUC) MakeDir(ctx context.Context, parentDir model.Obj, dirName string) error {
	data := base.Json{
		"dir_init_lock": false,
		"dir_path":      "",
		"file_name":     dirName,
		"pdir_fid":      parentDir.GetID(),
	}
	_, err := d.request("/file", http.MethodPost, func(req *resty.Request) {
		req.SetBody(data)
	}, nil)
	if err == nil {
		time.Sleep(time.Second)
	}
	return err
}

func (d *QuarkOrUC) Move(ctx context.Context, srcObj, dstDir model.Obj) error {
	data := base.Json{
		"action_type":  1,
		"exclude_fids": []string{},
		"filelist":     []string{srcObj.GetID()},
		"to_pdir_fid":  dstDir.GetID(),
	}
	_, err := d.request("/file/move", http.MethodPost, func(req *resty.Request) {
		req.SetBody(data)
	}, nil)
	return err
}

func (d *QuarkOrUC) Rename(ctx context.Context, srcObj model.Obj, newName string) error {
	data := base.Json{
		"fid":       srcObj.GetID(),
		"file_name": newName,
	}
	_, err := d.request("/file/rename", http.MethodPost, func(req *resty.Request) {
		req.SetBody(data)
	}, nil)
	return err
}

func (d *QuarkOrUC) Copy(ctx context.Context, srcObj, dstDir model.Obj) error {
	return errs.NotSupport
}

func (d *QuarkOrUC) Remove(ctx context.Context, obj model.Obj) error {
	data := base.Json{
		"action_type":  1,
		"exclude_fids": []string{},
		"filelist":     []string{obj.GetID()},
	}
	_, err := d.request("/file/delete", http.MethodPost, func(req *resty.Request) {
		req.SetBody(data)
	}, nil)
	return err
}

func (d *QuarkOrUC) Put(ctx context.Context, dstDir model.Obj, stream model.FileStreamer, up driver.UpdateProgress) (any, error) {
	tempFile, err := stream.CacheFullInTempFile()
	if err != nil {
		return "", err
	}
	defer func() {
		_ = tempFile.Close()
	}()
	m := md5.New()
	_, err = utils.CopyWithBuffer(m, tempFile)
	if err != nil {
		return "", err
	}
	_, err = tempFile.Seek(0, io.SeekStart)
	if err != nil {
		return "", err
	}
	md5Str := hex.EncodeToString(m.Sum(nil))
	s := sha1.New()
	_, err = utils.CopyWithBuffer(s, tempFile)
	if err != nil {
		return "", err
	}
	_, err = tempFile.Seek(0, io.SeekStart)
	if err != nil {
		return "", err
	}
	sha1Str := hex.EncodeToString(s.Sum(nil))
	// pre
	pre, err := d.upPre(stream, dstDir.GetID())
	if err != nil {
		return "", err
	}
	log.Debugln("hash: ", md5Str, sha1Str)
	// hash
	finish, resData, err := d.upHash(md5Str, sha1Str, pre.Data.TaskId)
	log.Debugln("-----hashdata: ", resData.Fid)
	if err != nil {
		log.Debugln("-----hashdata err: ", err)
		return "", err
	}

	// 创建 CombinedData 实例并合并 resData 和 dstDir
	combinedData := CombinedData{
		Fid:        resData.Fid,
		Thumbnail:  resData.Thumbnail,
		FormatType: resData.FormatType,
		Finish:     resData.Finish,
		DirID:      dstDir.GetID(),
		Name:       dstDir.GetName(),
		Size:       dstDir.GetSize(),
		Modified:   dstDir.ModTime(),
		Path:       dstDir.GetPath(),
		IsDir:      dstDir.IsDir(),
		// Add other fields from model.Obj as needed
	}

	log.WithFields(log.Fields{
		"Fid":        combinedData.Fid,
		"Thumbnail":  combinedData.Thumbnail,
		"FormatType": combinedData.FormatType,
		"Finish":     combinedData.Finish,
		"DirID":      combinedData.DirID,
		"Name":       combinedData.Name,
		"Size":       combinedData.Size,
		"Modified":   combinedData.Modified,
		"Path":       combinedData.Path,
		"IsDir":      combinedData.IsDir,
	}).Debugln("-----combineddata: ")

	if finish {
		// resData.Fid
		return combinedData, nil
	}
	// part up
	partSize := pre.Metadata.PartSize
	var bytes []byte
	md5s := make([]string, 0)
	defaultBytes := make([]byte, partSize)
	total := stream.GetSize()
	left := total
	partNumber := 1
	for left > 0 {
		if utils.IsCanceled(ctx) {
			return "", ctx.Err()
		}
		if left > int64(partSize) {
			bytes = defaultBytes
		} else {
			bytes = make([]byte, left)
		}
		_, err := io.ReadFull(tempFile, bytes)
		if err != nil {
			return "", err
		}
		left -= int64(len(bytes))
		log.Debugf("left: %d", left)
		m, err := d.upPart(ctx, pre, stream.GetMimetype(), partNumber, bytes)
		//m, err := driver.UpPart(pre, file.GetMIMEType(), partNumber, bytes, account, md5Str, sha1Str)
		if err != nil {
			return "", err
		}
		if m == "finish" {
			// resData.Fid
			return combinedData, nil
		}
		md5s = append(md5s, m)
		partNumber++
		up(100 * float64(total-left) / float64(total))
	}
	err = d.upCommit(pre, md5s)
	if err != nil {
		return "", err
	}
	// return pre.Data, d.upFinish(pre)
	return combinedData, d.upFinish(pre)
}

var _ driver.Driver = (*QuarkOrUC)(nil)
