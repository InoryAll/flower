/**
 * 数据库操作类
 */
// mongodb数据库操作封装
var mongoose = require('mongoose');
var config = require('../config');
mongoose.Promise = global.Promise;

class DBUtil{
  // 连接到数据库
  static connectToDB() {
    mongoose.connect(config.address);
    this.connection = mongoose.connection;
    this.connection.on('open', () => {
      console.log('connected to:'+config.address);
    });
    this.connection.on('error', (err) => {
      if (err) {
        console.log('connected to %s error', config.address);
        process.exit(1);
      }
    });
  }
  // 断开与数据库的连接
  static disconnectToDB() {
    mongoose.disconnect();
    this.connection.on('disconnected', () => {
      console.log('db disconnected to:'+config.address);
    });
    this.connection.on('error', (err) => {
      if (err) {
        console.log('disconnected to %s error', config.address);
        process.exit(1);
      }
    });
  }
}

module.exports = DBUtil;
