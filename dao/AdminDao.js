/**
 * 管理员操作dao类
 */
var Admin = require('../model/Admin');

class AdminDao{
  static findAdminByCondition(condition) {
    return new Promise((resolve, reject) => {
      Admin.find(condition, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  static updateAdminByCondition(condition, obj) {
    return new Promise((resolve, reject) => {
      Admin.update(condition, obj, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({})
        }
      });
    });
  }
  static addAdmin(obj) {
    return new Promise((resolve, reject) => {
      const initAdmin = {
        username: undefined,
        password: undefined,
        email: undefined,
        permission: 1,
        deleteFlag: 0,
      };
      var admin = new Admin({
        ...initAdmin,
        ...obj
      });
      admin.save((err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static deleteAdminByCondition(condition) {
    return new Promise((resolve, reject) => {
      Admin.remove(condition, (err) => {
        if(err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
}

module.exports = AdminDao;
