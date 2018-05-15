/**
 * node服务器路由
 */

var express = require('express');
var router = express.Router();
var AdminService = require('../service/AdminService');

// 后台用户路由处理
router.get('/getAdmin', AdminService.getAdmin);
router.get('/deleteAdmin', AdminService.deleteAdmin);
router.post('/addAdmin', AdminService.addAdmin);
router.post('/updateAdmin', AdminService.updateAdmin);

module.exports = router;
