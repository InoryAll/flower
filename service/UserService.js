/**
 * 用户逻辑service类
 */
var UserDao = require('../dao/UserDao');
var Response = require('../util/Response');

class UserService{
  static validDateUser(req, res, next) {
    var condition = { username: req.query.username };
    UserDao.findUserByCondition(condition)
    .then((data) => {
      res.status(200).json(Response.ok(data));
    }).catch((err) => {
      res.status(200).json(Response.error(err));
    });
  }
  static addNewUser(req, res, next) {
    var obj = req.body;
    UserDao.addUser(obj)
    .then((data) => {
      res.status(200).json(Response.ok(data));
    }).catch((err) => {
      res.status(200).json(Response.error(err));
    });
  }
  static updateUser(req, res, next) {
    var condition = req.body.condition;
    var obj = req.body.obj;
    UserDao.updateUserByCondition(condition, obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static deleteUser(req, res, next) {
    var condition = req.query;
    UserDao.deleteUserByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
}

module.exports = UserService;
