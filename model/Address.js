// mongodb数据对象,
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddressSchema = new Schema({
  userId: String,
  userName: String,
  phone: String,
  content: String,
  deleteFlag: Number,
});

mongoose.model('Address', AddressSchema);
module.exports = mongoose.model('Address');
