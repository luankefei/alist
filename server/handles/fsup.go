package handles

import (
	"net/url"
	stdpath "path"
	"strconv"
	"time"

	"github.com/alist-org/alist/v3/internal/task"
	// "github.com/prometheus/common/log"

	"github.com/alist-org/alist/v3/internal/fs"
	"github.com/alist-org/alist/v3/internal/model"
	"github.com/alist-org/alist/v3/internal/stream"
	"github.com/alist-org/alist/v3/server/common"
	"github.com/gin-gonic/gin"

	log "github.com/sirupsen/logrus"
)

func getLastModified(c *gin.Context) time.Time {
	now := time.Now()
	lastModifiedStr := c.GetHeader("Last-Modified")
	lastModifiedMillisecond, err := strconv.ParseInt(lastModifiedStr, 10, 64)
	if err != nil {
		return now
	}
	lastModified := time.UnixMilli(lastModifiedMillisecond)
	return lastModified
}

func FsStream(c *gin.Context) {
	path := c.GetHeader("File-Path")
	path, err := url.PathUnescape(path)
	if err != nil {
		common.ErrorResp(c, err, 400)
		return
	}
	asTask := c.GetHeader("As-Task") == "true"
	user := c.MustGet("user").(*model.User)
	path, err = user.JoinPath(path)
	if err != nil {
		common.ErrorResp(c, err, 403)
		return
	}
	dir, name := stdpath.Split(path)
	sizeStr := c.GetHeader("Content-Length")
	size, err := strconv.ParseInt(sizeStr, 10, 64)
	if err != nil {
		common.ErrorResp(c, err, 400)
		return
	}
	s := &stream.FileStream{
		Obj: &model.Object{
			Name:     name,
			Size:     size,
			Modified: getLastModified(c),
		},
		Reader:       c.Request.Body,
		Mimetype:     c.GetHeader("Content-Type"),
		WebPutAsTask: asTask,
	}
	var t task.TaskExtensionInfo
	var data any
	if asTask {
		t, err = fs.PutAsTask(c, dir, s)
	} else {
		data, err = fs.PutDirectly(c, dir, s, true)
	}
	defer c.Request.Body.Close()
	if err != nil {
		common.ErrorResp(c, err, 500)
		return
	}

	log.Debugln("-----fsstream 0001 %v", data)
	if data != nil {
		log.Debugln("-----fsstream c.JSON & return", data)
		c.JSON(200, gin.H{
			// "task": getTaskInfo(t),
			"code":    200,
			"message": "success",
			"data":    data,
		})
		return
	}

	log.Debugln("-----fsstream 0002 %v", data)
	if t == nil {
		common.SuccessResp(c)
		return
	}

	log.Debugln("-----fsstream 0003 %v", data)
	common.SuccessResp(c, gin.H{
		"task": getTaskInfo(t),
	}, data)

	log.Debugln("-----fsstream 0004 %v", data)
}

// func FsForm(c *gin.Context) {
// 	path := c.GetHeader("File-Path")
// 	path, err := url.PathUnescape(path)
// 	if err != nil {
// 		common.ErrorResp(c, err, 400)
// 		return
// 	}
// 	asTask := c.GetHeader("As-Task") == "true"
// 	user := c.MustGet("user").(*model.User)
// 	path, err = user.JoinPath(path)
// 	if err != nil {
// 		common.ErrorResp(c, err, 403)
// 		return
// 	}
// 	storage, err := fs.GetStorage(path, &fs.GetStoragesArgs{})
// 	if err != nil {
// 		common.ErrorResp(c, err, 400)
// 		return
// 	}
// 	if storage.Config().NoUpload {
// 		common.ErrorStrResp(c, "Current storage doesn't support upload", 405)
// 		return
// 	}
// 	file, err := c.FormFile("file")
// 	if err != nil {
// 		common.ErrorResp(c, err, 500)
// 		return
// 	}
// 	f, err := file.Open()
// 	if err != nil {
// 		common.ErrorResp(c, err, 500)
// 		return
// 	}
// 	defer f.Close()
// 	dir, name := stdpath.Split(path)
// 	s := stream.FileStream{
// 		Obj: &model.Object{
// 			Name:     name,
// 			Size:     file.Size,
// 			Modified: getLastModified(c),
// 		},
// 		Reader:       f,
// 		Mimetype:     file.Header.Get("Content-Type"),
// 		WebPutAsTask: asTask,
// 	}
// 	var t task.TaskExtensionInfo
// 	if asTask {
// 		s.Reader = struct {
// 			io.Reader
// 		}{f}
// 		t, err = fs.PutAsTask(c, dir, &s)
// 	} else {
// 		ss, err := stream.NewSeekableStream(s, nil)
// 		if err != nil {
// 			common.ErrorResp(c, err, 500)
// 			return
// 		}
// 		err = fs.PutDirectly(c, dir, ss, true)
// 	}
// 	if err != nil {
// 		common.ErrorResp(c, err, 500)
// 		return
// 	}
// 	if t == nil {
// 		common.SuccessResp(c)
// 		return
// 	}
// 	common.SuccessResp(c, gin.H{
// 		"task": getTaskInfo(t),
// 	})
// }
