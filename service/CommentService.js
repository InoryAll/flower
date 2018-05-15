/**
 * 评价逻辑service类
 */
var CommentDao = require('../dao/CommentDao');
var Response = require('../util/Response');

class CommentService{
  static getComment(req, res, next) {
    var condition = req.query;
    CommentDao.findCommentByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static deleteComment(req, res, next) {
    var condition = req.query;
    CommentDao.deleteCommentByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static addComment(req, res, next) {
    var obj = req.body;
    CommentDao.addComment(obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static updateComment(req, res, next) {
    var condition = req.body.condition;
    var obj = req.body.obj;
    CommentDao.updateCommentByCondition(condition, obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
}

module.exports = CommentService;
