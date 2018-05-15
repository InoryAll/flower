/**
 * node服务器路由
 */

var express = require('express');
var router = express.Router();

// 后台首页渲染
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
