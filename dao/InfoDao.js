/**
 * 资讯操作dao类
 */
var Info = require('../model/Info');

class InfoDao{
  static findInfoByCondition(condition) {
    return new Promise((resolve, reject)=> {
      Info.find(condition, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  static addInfo(obj) {
    return new Promise((resolve, reject) => {
      const initInfo = {
        name: undefined,
        author: undefined,
        content: undefined,
        timestamp: undefined,
        deleteFlag: 0,
      };
      var info = new Info({
        ...initInfo,
        ...obj,
      });
      info.save((err) => {
        if(err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static updateInfoByCondition(condition, obj) {
    return new Promise((resolve, reject) => {
      Info.update(condition, obj, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static deleteInfoByCondition(condition) {
    return new Promise((resolve, reject) => {
      Info.remove(condition, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
}

module.exports = InfoDao;
