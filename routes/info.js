/**
 * node服务器路由
 */

var express = require('express');
var router = express.Router();
var InfoService = require('../service/InfoService');

// 后台用户路由处理
router.get('/getInfo', InfoService.getInfo);
router.get('/deleteInfo', InfoService.deleteInfo);
router.post('/addInfo', InfoService.addInfo);
router.post('/updateInfo', InfoService.updateInfo);

module.exports = router;
