// mongodb数据对象
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartSchema = new Schema({
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
  deleteFlag: Number,
});

mongoose.model('Cart', CartSchema);
module.exports = mongoose.model('Cart');