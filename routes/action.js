/**
 * node服务器路由
 */

var express = require('express');
var router = express.Router();
var ActionService = require('../service/ActionService');

// 后台用户路由处理
router.get('/getAction', ActionService.getAction);
router.get('/deleteAction', ActionService.deleteAction);
router.post('/addAction', ActionService.addAction);
router.post('/updateAction', ActionService.updateAction);

module.exports = router;
