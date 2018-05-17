// mongodb数据对象,
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecommendSchema = new Schema({
  name: String,// 名称
  url: String,// 图片地址
  prePrice: String,// 原价
  nowPrice: String,// 现价
  usage: String,// 用途
  material: String,// 材料
  price: String,// 价值
  object: String,// 对象
  holiday: String,// 节日
  branch: String,// 枝数
  kind: String,// 类型
  color: String,// 颜色
  pack: String,// 包装
  meaning: String,// 花语
  attach: String,// 附送
  send: String,// 配送
  detail: String,// 说明
  position: String,// 特殊位置
  deleteFlag: Number,// 删除标志
});

mongoose.model('Recommend', RecommendSchema);
module.exports = mongoose.model('Recommend');
