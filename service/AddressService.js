/**
 * 地址逻辑service类
 */
var AddressDao = require('../dao/AddressDao');
var Response = require('../util/Response');

class AddressService{
  static getAddress(req, res, next) {
    var condition = req.query;
    AddressDao.findAddressByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static deleteAddress(req, res, next) {
    var condition = req.query;
    AddressDao.deleteAddressByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static addAddress(req, res, next) {
    var obj = req.body;
    AddressDao.addAddress(obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static updateAddress(req, res, next) {
    var condition = req.body.condition;
    var obj = req.body.obj;
    AddressDao.updateAddressByCondition(condition, obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
}

module.exports = AddressService;
