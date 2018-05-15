/**
 * 订单逻辑service类
 */
var OrderDao = require('../dao/OrderDao');
var Response = require('../util/Response');

class OrderService{
  static getOrder(req, res, next) {
    var condition = req.query;
    OrderDao.findOrderByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static deleteOrder(req, res, next) {
    var condition = req.query;
    OrderDao.deleteOrderByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static addOrder(req, res, next) {
    var obj = req.body;
    OrderDao.addOrder(obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static updateOrder(req, res, next) {
    var condition = req.body.condition;
    var obj = req.body.obj;
    OrderDao.updateOrderByCondition(condition, obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
}

module.exports = OrderService;
