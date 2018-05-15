/**
 * node服务器路由
 */

var express = require('express');
var router = express.Router();
var UserService = require('../service/UserService');

// 后台用户路由处理
router.get('/validateUser', UserService.validDateUser);
router.get('/deleteUser', UserService.deleteUser);
router.post('/addUser', UserService.addNewUser);
router.post('/updateUser', UserService.updateUser);

module.exports = router;
