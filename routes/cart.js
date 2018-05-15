/**
 * node服务器路由
 */

var express = require('express');
var router = express.Router();
var CartService = require('../service/CartService');

// 后台用户路由处理
router.get('/getCart', CartService.getCart);
router.get('/deleteCart', CartService.deleteCart);
router.post('/addCart', CartService.addCart);
router.post('/updateCart', CartService.updateCart);

module.exports = router;
