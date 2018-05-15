// mongodb数据对象,
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: String,// 名称
  url: String,// 图片地址
  adminId: String,// 商家id
  adminName: String,// 商家姓名
  prePrice: String,// 原价
  nowPrice: String,// 现价
  type: String,// 类型
  ingredients: String,// 配料
  origin: String,// 产地
  specification: String,// 规格
  expiration: String,// 保质期
  standard: String,// 产品标准号
  license: String,// 生产许可证编号
  count: Number, // 销量
  amount: Number,// 库存
  taste: String,// 口味
  store: String,// 储存方法
  eat: String,// 食用方法
  detail: String,// 商家细节
  deleteFlag: Number,// 删除标志
});

mongoose.model('Item', ItemSchema);
module.exports = mongoose.model('Item');