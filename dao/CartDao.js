/**
 * 购物车操作dao类
 */
var Cart = require('../model/Cart');

class CartDao{
  static findCartByCondition(condition) {
    return new Promise((resolve, reject) => {
      Cart.find(condition, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      })
    });
  }
  static deleteCartByCondition(condition) {
    return new Promise((resolve, reject) => {
      Cart.remove(condition, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static addCart(obj) {
    return new Promise((resolve, reject) => {
      var initCart = {
        itemId: undefined,
        itemName: undefined,
        itemPrice: undefined,
        url: undefined,
        count: undefined,
        itemTotalPrice: undefined,
        userId: undefined,
        userName: undefined,
        adminId: undefined,
        adminName: undefined,
        deleteFlag: 0,
      };
      var cart = new Cart({
        ...initCart,
        ...obj,
      });
      cart.save((err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });

  }
  static updateCartByCondition(condition, obj) {
    return new Promise((resolve, reject) => {
      Cart.update(condition, obj, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
}

module.exports = CartDao;
