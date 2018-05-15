/**
 * node服务器路由
 */

var express = require('express');
var router = express.Router();
var ItemService = require('../service/ItemService');

// 后台用户路由处理
router.get('/getItem', ItemService.getItem);
router.post('/getItemByPage', ItemService.getItemsByPage);
router.get('/deleteItem', ItemService.deleteItem);
router.post('/addItem', ItemService.addItem);
router.post('/updateItem', ItemService.updateItem);

module.exports = router;
