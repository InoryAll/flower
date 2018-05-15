/**
 * 资讯逻辑service类
 */
var InfoDao = require('../dao/InfoDao');
var Response = require('../util/Response');

class InfoService{
  static getInfo(req, res, next) {
    var condition = req.query;
    InfoDao.findInfoByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static deleteInfo(req, res, next) {
    var condition = req.query;
    InfoDao.deleteInfoByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static addInfo(req, res, next) {
    var obj = req.body;
    InfoDao.addInfo(obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static updateInfo(req, res, next) {
    var condition = req.body.condition;
    var obj = req.body.obj;
    InfoDao.updateInfoByCondition(condition, obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
}

module.exports = InfoService;
