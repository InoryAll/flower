// mongodb数据对象,
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  permission: Number,
  deleteFlag: Number,
});

mongoose.model('Admin', UserSchema);
module.exports = mongoose.model('Admin');
