/**
 * node服务器路由
 */

var express = require('express');
var router = express.Router();
var RecommendService = require('../service/RecommendService');

// 后台用户路由处理
router.get('/getRecommend', RecommendService.getRecommend);
router.get('/deleteRecommend', RecommendService.deleteRecommend);
router.post('/addRecommend', RecommendService.addRecommend);
router.post('/updateRecommend', RecommendService.updateRecommend);

module.exports = router;
