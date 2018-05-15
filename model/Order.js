// mongodb数据对象
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  itemId: String,
  itemName: String,
  itemPrice: String,
  url: String,
  count: String,
  itemTotalPrice: String,
  userId: String,
  userName: String,
  adminId: String,
  adminName: String,
  note: String,
  status: String,
  address: String,
  timestamp: String,
  deleteFlag: Number,
});

mongoose.model('Order', OrderSchema);
module.exports = mongoose.model('Order');