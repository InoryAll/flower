/**
 * node服务器路由
 * Created by tianrenjie on 2018/3/14
 */

var express = require('express');
var router = express.Router();
var service = require('../service/service');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/getOpenId', service.getOpenId);
// router.post('/saveUserShare', service.saveUserShare);

module.exports = router;
