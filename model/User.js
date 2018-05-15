// mongodb数据对象,
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String,
  name: String,
  sex: String,
  birthday: String,
  tel: String,
  email: String,
  permission: Number,
  qq: String,
  place: String,
  deleteFlag: Number,
});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');
