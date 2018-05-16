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
        prePrice: undefined,// 原价
        nowPrice: undefined,// 现价
        usage: undefined,// 用途
        material: undefined,// 材料
        price: undefined,// 价值
        object: undefined,// 对象
        holiday: undefined,// 节日
        branch: undefined,// 枝数
        kind: undefined,// 类型
        color: undefined,// 颜色
        pack: undefined,// 包装
        meaning: undefined,// 花语
        attach: undefined,// 附送
        send: undefined,// 配送
        detail: undefined,// 说明
        position: undefined,// 特殊位置
        deleteFlag: undefined,// 删除标志
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
