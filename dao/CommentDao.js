/**
 * 评价操作dao类
 */
var Comment = require('../model/Comment');

class CommentDao{
  static findCommentByCondition(condition) {
    return new Promise((resolve, reject)=> {
      Comment.find(condition, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  static addComment(obj) {
    return new Promise((resolve, reject) => {
      const initComment = {
        level: undefined,
        content: undefined,
        itemId: undefined,
        itemName: undefined,
        adminId: undefined,
        adminName: undefined,
        userId: undefined,
        userName: undefined,
        timestamp: undefined,
        deleteFlag: 0,
      };
      var comment = new Comment({
        ...initComment,
        ...obj,
      });
      comment.save((err) => {
        if(err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static updateCommentByCondition(condition, obj) {
    return new Promise((resolve, reject) => {
      Comment.update(condition, obj, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static deleteCommentByCondition(condition) {
    return new Promise((resolve, reject) => {
      Comment.remove(condition, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
}

module.exports = CommentDao;
