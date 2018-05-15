/**
 * 产品操作dao类
 */
var Item = require('../model/Item');

class ItemDao{
  static findItemByCondition(condition) {
    return new Promise((resolve, reject)=> {
      Item.find(condition, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  static addItem(obj) {
    return new Promise((resolve, reject) => {
      const initItem = {
        name: undefined,// 名称
        url: undefined,// 图片地址
        adminId: undefined,// 商家id
        adminName: undefined,// 商家姓名
        prePrice: undefined,// 原价
        nowPrice: undefined,// 现价
        type: undefined,// 类型
        ingredients: undefined,// 配料
        origin: undefined,// 产地
        specification: undefined,// 规格
        expiration: undefined,// 保质期
        standard: undefined,// 产品标准号
        license: undefined,// 生产许可证编号
        count: undefined, // 销量
        amount: undefined,// 库存
        taste: undefined,// 口味
        store: undefined,// 储存方法
        eat: undefined,// 食用方法
        detail: undefined,// 商家细节
        deleteFlag: 0,// 删除标志
      };
      var item = new Item({
        ...initItem,
        ...obj,
      });
      item.save((err) => {
        if(err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static updateItemByCondition(condition, obj) {
    return new Promise((resolve, reject) => {
      Item.update(condition, obj, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static deleteItemByCondition(condition) {
    return new Promise((resolve, reject) => {
      Item.remove(condition, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
}

module.exports = ItemDao;
