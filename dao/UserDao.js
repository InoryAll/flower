/**
 * 用户操作dao类
 */
var User = require('../model/User');

class UserDao{
  static findUserByCondition(condition) {
    return new Promise((resolve, reject)=> {
      User.find(condition, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  static addUser(obj) {
    return new Promise((resolve, reject) => {
      const initUser = {
        username: undefined,
        password: undefined,
        name: undefined,
        sex: undefined,
        birthday: undefined,
        tel: undefined,
        email: undefined,
        permission: 1,
        deleteFlag: 0,
      };
      delete obj.passwordRepeat;
      var user = new User({
        ...initUser,
        ...obj,
      });
      user.save((err) => {
        if(err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static updateUserByCondition(condition, obj) {
    return new Promise((resolve, reject) => {
      User.update(condition, obj, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static deleteUserByCondition(condition) {
    return new Promise((resolve, reject) => {
      User.remove(condition, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
}

module.exports = UserDao;
