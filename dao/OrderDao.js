/**
 * 订单操作dao类
 */
var Order = require('../model/Order');

class OrderDao{
  static findOrderByCondition(condition) {
    return new Promise((resolve, reject) => {
      Order.find(condition, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      })
    });
  }
  static deleteOrderByCondition(condition) {
    return new Promise((resolve, reject) => {
      Order.remove(condition, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static addOrder(obj) {
    return new Promise((resolve, reject) => {
      var initOrder = {
        itemId: undefined,
        itemName: undefined,
        itemPrice: undefined,
        count: undefined,
        url: undefined,
        itemTotalPrice: undefined,
        userId: undefined,
        userName: undefined,
        adminId: undefined,
        adminName: undefined,
        note: undefined,
        status: undefined,
        address: undefined,
        timestamp: undefined,
        deleteFlag: 0,
      };
      var order = new Order({
        ...initOrder,
        ...obj,
      });
      order.save((err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });

  }
  static updateOrderByCondition(condition, obj) {
    return new Promise((resolve, reject) => {
      Order.update(condition, obj, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
}

module.exports = OrderDao;
