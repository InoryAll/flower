// mongodb数据对象
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  receiveName: String,
  receivePhone: String,
  address: String,
  sendName: String,
  sendPhone: String,
  payWay: String,
  date: String,
  totalPrice: String,
  timestamp: String,
  itemList: Array,
  userId: String,
  userName: String,
  status: Number,
  deleteFlag: Number,
});

mongoose.model('Order', OrderSchema);
module.exports = mongoose.model('Order');