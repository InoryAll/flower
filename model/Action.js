// mongodb数据对象,
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActionSchema = new Schema({
  adminId: String,
  adminName: String,
  type: String,
  content: String,
  timestamp: String,
  deleteFlag: Number,
});

mongoose.model('Action', ActionSchema);
module.exports = mongoose.model('Action');
