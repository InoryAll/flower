// mongodb数据对象,
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  name: String,
  content: String,
  itemId: String,
  itemName: String,
  userId: String,
  userName: String,
  adminId: String,
  adminName: String,
  timestamp: String,
  deleteFlag: Number,
});

mongoose.model('Question', QuestionSchema);
module.exports = mongoose.model('Question');
