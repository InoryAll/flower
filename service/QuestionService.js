/**
 * 问题逻辑service类
 */
var QuestionDao = require('../dao/QuestionDao');
var Response = require('../util/Response');

class QuestionService{
  static getQuestion(req, res, next) {
    var condition = req.query;
    QuestionDao.findQuestionByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static deleteQuestion(req, res, next) {
    var condition = req.query;
    QuestionDao.deleteQuestionByCondition(condition).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static addQuestion(req, res, next) {
    var obj = req.body;
    QuestionDao.addQuestion(obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
  static updateQuestion(req, res, next) {
    var condition = req.body.condition;
    var obj = req.body.obj;
    QuestionDao.updateQuestionByCondition(condition, obj).then((data) => {
      return res.status(200).json(Response.ok(data));
    }).catch((err) => {
      return res.status(200).json(Response.error(err));
    });
  }
}

module.exports = QuestionService;
