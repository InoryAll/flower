/**
 * 操作记录逻辑service类
 */
var ActionDao = require('../dao/ActionDao');
var Response = require('../util/Response');

class ActionService{
  static getAction(req, res, next) {
    var condition = req.query;
    ActionDao.findActionByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static deleteAction(req, res, next) {
    var condition = req.query;
    ActionDao.deleteActionByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static addAction(req, res, next) {
    var obj = req.body;
    ActionDao.addAction(obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static updateAction(req, res, next) {
    var condition = req.body.condition;
    var obj = req.body.obj;
    ActionDao.updateActionByCondition(condition, obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
}

module.exports = ActionService;
