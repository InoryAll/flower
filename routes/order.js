/**
 * node服务器路由
 */

var express = require('express');
var router = express.Router();
var OrderService = require('../service/OrderService');

// 后台用户路由处理
router.get('/getOrder', OrderService.getOrder);
router.get('/deleteOrder', OrderService.deleteOrder);
router.post('/addOrder', OrderService.addOrder);
router.post('/updateOrder', OrderService.updateOrder);

module.exports = router;
