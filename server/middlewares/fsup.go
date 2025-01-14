package middlewares

import (
	"net/url"
	stdpath "path"

	"github.com/alist-org/alist/v3/internal/errs"
	"github.com/alist-org/alist/v3/internal/model"
	"github.com/alist-org/alist/v3/internal/op"
	"github.com/alist-org/alist/v3/server/common"
	"github.com/gin-gonic/gin"
	"github.com/pkg/errors"
	log "github.com/sirupsen/logrus"
)

// func FsUp(c *gin.Context) {
// 	path := c.GetHeader("File-Path")
// 	password := c.GetHeader("Password")
// 	path, err := url.PathUnescape(path)
// 	if err != nil {
// 		common.ErrorResp(c, err, 400)
// 		c.Abort()
// 		return
// 	}
// 	user := c.MustGet("user").(*model.User)
// 	path, err = user.JoinPath(path)
// 	if err != nil {
// 		common.ErrorResp(c, err, 403)
// 		return
// 	}
// 	meta, err := op.GetNearestMeta(stdpath.Dir(path))
// 	if err != nil {
// 		if !errors.Is(errors.Cause(err), errs.MetaNotFound) {
// 			common.ErrorResp(c, err, 500, true)
// 			c.Abort()
// 			return
// 		}
// 	}
// 	if !(common.CanAccess(user, meta, path, password) && (user.CanWrite() || common.CanWrite(meta, stdpath.Dir(path)))) {
// 		common.ErrorResp(c, errs.PermissionDenied, 403)
// 		c.Abort()
// 		return
// 	}
// 	c.Next()
// }

func FsUp(c *gin.Context) {
	path := c.GetHeader("File-Path")
	password := c.GetHeader("Password")
	log.Debugf("Received File-Path: %s, Password: %s", path, password)

	path, err := url.PathUnescape(path)
	if err != nil {
		log.Errorf("Failed to unescape path: %v", err)
		common.ErrorResp(c, err, 400)
		c.Abort()
		return
	}
	log.Debugf("Unescaped path: %s", path)

	user := c.MustGet("user").(*model.User)
	path, err = user.JoinPath(path)
	if err != nil {
		log.Errorf("Failed to join path: %v", err)
		common.ErrorResp(c, err, 403)
		return
	}
	log.Debugf("Joined path: %s", path)

	meta, err := op.GetNearestMeta(stdpath.Dir(path))
	if err != nil {
		if !errors.Is(errors.Cause(err), errs.MetaNotFound) {
			log.Errorf("Failed to get nearest meta: %v", err)
			common.ErrorResp(c, err, 500, true)
			c.Abort()
			return
		}
	}
	log.Debugf("Meta: %+v", meta)

	if !(common.CanAccess(user, meta, path, password) && (user.CanWrite() || common.CanWrite(meta, stdpath.Dir(path)))) {
		log.Warnf("Permission denied for user: %s, path: %s", user.Username, path)
		common.ErrorResp(c, errs.PermissionDenied, 403)
		c.Abort()
		return
	}
	log.Debugf("User %s has access to path: %s", user.Username, path)

	c.Next()
}
