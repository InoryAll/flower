var express = require('express');
var router = express.Router();
var path = require('path');
var formidable = require('formidable');
var util = require('util');

router.post('/upload',function (req, res, next){
  var form = new formidable.IncomingForm();
  //设置编辑
  form.encoding = 'utf-8';
  //保留后缀
  form.keepExtensions = true;
  //设置文件存储路径
  form.uploadDir = path.join(__dirname, '../public/static');

  form.parse(req, function (err, fields, files){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end(util.inspect({fields: fields, files: files}));
  })
});

module.exports = router;