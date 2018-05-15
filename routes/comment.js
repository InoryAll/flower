/**
 * node服务器路由
 */

var express = require('express');
var router = express.Router();
var CommentService = require('../service/CommentService');

// 后台用户路由处理
router.get('/getComment', CommentService.getComment);
router.get('/deleteComment', CommentService.deleteComment);
router.post('/addComment', CommentService.addComment);
router.post('/updateComment', CommentService.updateComment);

module.exports = router;
