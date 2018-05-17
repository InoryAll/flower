/**
 * 地址逻辑service类
 */
var RecommendDao = require('../dao/RecommendDao');
var Response = require('../util/Response');

class RecommendService{
  static getRecommend(req, res, next) {
    var condition = req.query;
    RecommendDao.findRecommendByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static deleteRecommend(req, res, next) {
    var condition = req.query;
    RecommendDao.deleteRecommendByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static addRecommend(req, res, next) {
    var obj = req.body;
    RecommendDao.addRecommend(obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static updateRecommend(req, res, next) {
    var condition = req.body.condition;
    var obj = req.body.obj;
    RecommendDao.updateRecommendByCondition(condition, obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
}

module.exports = RecommendService;
