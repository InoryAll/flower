/**
 * 管理逻辑service类
 */
var Response = require('../util/Response');
var AdminDao = require('../dao/AdminDao');

class AdminService{
  static getAdmin(req, res, next) {
    var condition = req.query;
    AdminDao.findAdminByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static deleteAdmin(req, res, next) {
    var condition = req.query;
    AdminDao.deleteAdminByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static updateAdmin(req, res, next) {
    var condition = req.body.condition;
    var obj = req.body.obj;
    AdminDao.updateAdminByCondition(condition, obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static addAdmin(req, res, next) {
    var obj = req.body;
    AdminDao.addAdmin(obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
}

module.exports = AdminService;
