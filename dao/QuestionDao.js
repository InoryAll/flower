/**
 * 问题dao操作类
 */
 var Question = require('../model/Question');

 class QuestionDao{
    static findQuestionByCondition(condition) {
      return new Promise((resolve, reject) => {
        Question.find(condition, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    }
    static deleteQuestionByCondition(condition) {
      return new Promise((resolve, reject) => {
        Question.remove(condition, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve({});
          }
        });
      });
    }
    static addQuestion(obj) {
      return new Promise((resolve, reject) => {
        var initQuestion = {
          name: undefined,
          content: undefined,
          itemId: undefined,
          itemName: undefined,
          userId: undefined,
          userName: undefined,
          adminId: undefined,
          adminName: undefined,
          timestamp: undefined,
          deleteFlag: 0,
        };
        var question = new Question({
          ...initQuestion,
          ...obj,
        });
        question.save((err) => {
          if (err) {
            reject(err);
          } else {
            resolve({});
          }
        });
      });
    }
    static updateQuestionByCondition(condition, obj) {
      return new Promise((resolve, reject) => {
        Question.update(condition, obj, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve({});
          }
        });
      });
    }
 }
 module.exports = QuestionDao;
