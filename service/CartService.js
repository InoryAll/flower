/**
 * 购物车逻辑service类
 */
var CartDao = require('../dao/CartDao');
var Response = require('../util/Response');

class CartService{
  static getCart(req, res, next) {
    var condition = req.query;
    CartDao.findCartByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static deleteCart(req, res, next) {
    var condition = req.query;
    CartDao.deleteCartByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static addCart(req, res, next) {
    var obj = req.body;
    CartDao.addCart(obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static updateCart(req, res, next) {
    var condition = req.body.condition;
    var obj = req.body.obj;
    CartDao.updateCartByCondition(condition, obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
}

module.exports = CartService;
