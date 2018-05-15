/**
 * 操作记录操作dao类
 */
var Action = require('../model/Action');

class ActionDao{
  static findActionByCondition(condition) {
    return new Promise((resolve, reject)=> {
      Action.find(condition, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  static addAction(obj) {
    return new Promise((resolve, reject) => {
      const initAction = {
        adminId: undefined,
        adminName: undefined,
        type: undefined,
        content: undefined,
        timestamp: undefined,
        deleteFlag: 0,
      };
      var action = new Action({
        ...initAction,
        ...obj,
      });
      action.save((err) => {
        if(err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static updateActionByCondition(condition, obj) {
    return new Promise((resolve, reject) => {
      Action.update(condition, obj, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static deleteActionByCondition(condition) {
    return new Promise((resolve, reject) => {
      Action.remove(condition, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
}

module.exports = ActionDao;
