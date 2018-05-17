// mongodb数据对象,
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InfoSchema = new Schema({
  name: String,
  author: String,
  content: String,
  timestamp: String,
  type: String,
  deleteFlag: Number,
});

mongoose.model('Info', InfoSchema);
module.exports = mongoose.model('Info');
