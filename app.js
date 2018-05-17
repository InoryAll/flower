var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var DBUtil = require('./util/DBUtil');

var index = require('./routes/index');
var user = require('./routes/user');
var item = require('./routes/item');
var admin = require('./routes/admin');
var order = require('./routes/order');
var cart = require('./routes/cart');
var question = require('./routes/question');
var comment = require('./routes/comment');
var info = require('./routes/info');
var recommend = require('./routes/recommend');
var action = require('./routes/action');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1');
//   res.header("Content-Type", "application/json;charset=utf-8");
//   if (req.method === 'OPTIONS') {
//     res.send(200); // 让options请求快速返回
//   }
//   else {
//     next();
//   }
// });
app.use('/', index);
app.use('/user', user);
app.use('/item', item);
app.use('/admin', admin);
app.use('/order', order);
app.use('/cart', cart);
app.use('/question', question);
app.use('/comment', comment);
app.use('/info', info);
app.use('/recommend', recommend);
app.use('/action', action);
DBUtil.connectToDB();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
