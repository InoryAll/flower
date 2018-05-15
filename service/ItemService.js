/**
 * 产品逻辑service类
 */
var Response = require('../util/Response');
var ItemDao = require('../dao/ItemDao');

class ItemService {
  static getItem(req, res, next) {
    var condition = req.query;
    ItemDao.findItemByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static getItemsByPage(req, res, next) {
    var condition = req.body;
    var paginator = condition.paginator;
    delete condition.paginator;
    console.log(condition);
    ItemDao.findItemByCondition(condition).then((data) => {
      var formatdata = data.slice((paginator.currentPage-1)*paginator.pageSize, paginator.currentPage*paginator.pageSize);
      return res.status(200).json(Response.ok({ formatdata, paginator }));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static deleteItem(req, res, next) {
    var condition = req.query;
    ItemDao.deleteItemByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    })
  }
  static updateItem(req, res, next) {
    var condition = req.body.condition;
    var obj = req.body.obj;
    ItemDao.updateItemByCondition(condition, obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static addItem(req, res, next) {
    var obj = req.body;
    ItemDao.addItem(obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    })
  }
}

module.exports = ItemService;
