/**
 * 地址操作dao类
 */
var Address = require('../model/Address');

class AddressDao{
  static findAddressByCondition(condition) {
    return new Promise((resolve, reject)=> {
      Address.find(condition, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  static addAddress(obj) {
    return new Promise((resolve, reject) => {
      const initAddress = {
        userId: undefined,
        userName: undefined,
        phone: undefined,
        content: undefined,
        deleteFlag: 0,
      };
      var address = new Address({
        ...initAddress,
        ...obj,
      });
      address.save((err) => {
        if(err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static updateAddressByCondition(condition, obj) {
    return new Promise((resolve, reject) => {
      Address.update(condition, obj, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static deleteAddressByCondition(condition) {
    return new Promise((resolve, reject) => {
      Address.remove(condition, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
}

module.exports = AddressDao;
