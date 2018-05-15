// mongodb数据对象,
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  level: String,
  content: String,
  itemId: String,
  itemName: String,
  adminId: String,
  adminName: String,
  userId: String,
  userName: String,
  timestamp: String,
  deleteFlag: Number,
});

mongoose.model('Comment', CommentSchema);
module.exports = mongoose.model('Comment');
