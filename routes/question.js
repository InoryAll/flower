/**
 * node服务器路由
 */

var express = require('express');
var router = express.Router();
var QuestionService = require('../service/QuestionService');

// 后台用户路由处理
router.get('/getQuestion', QuestionService.getQuestion);
router.get('/deleteQuestion', QuestionService.deleteQuestion);
router.post('/addQuestion', QuestionService.addQuestion);
router.post('/updateQuestion', QuestionService.updateQuestion);

module.exports = router;
