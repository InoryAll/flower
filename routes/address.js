/**
 * node服务器路由
 */

var express = require('express');
var router = express.Router();
var AddressService = require('../service/AddressService');

// 后台用户路由处理
router.get('/getAddress', AddressService.getAddress);
router.get('/deleteAddress', AddressService.deleteAddress);
router.post('/addAddress', AddressService.addAddress);
router.post('/updateAddress', AddressService.updateAddress);

module.exports = router;
