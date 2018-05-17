/**
 * 地址操作dao类
 */
var Recommend = require('../model/Recommend');

class RecommendDao{
  static findRecommendByCondition(condition) {
    return new Promise((resolve, reject)=> {
      Recommend.find(condition, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
  static addRecommend(obj) {
    return new Promise((resolve, reject) => {
      const initRecommend = {
        name: undefined,// 名称
        url: undefined,// 图片地址
        prePrice: undefined,// 原价
        nowPrice: undefined,// 现价
        usage: undefined,// 用途
        material: undefined,// 材料
        price: undefined,// 价值
        object: undefined,// 对象
        holiday: undefined,// 节日
        branch: undefined,// 枝数
        kind: undefined,// 类型
        color: undefined,// 颜色
        pack: undefined,// 包装
        meaning: undefined,// 花语
        attach: undefined,// 附送
        send: undefined,// 配送
        detail: undefined,// 说明
        position: undefined,// 特殊位置
        deleteFlag: undefined,// 删除标志
      };
      var recommend = new Recommend({
        ...initRecommend,
        ...obj,
      });
      recommend.save((err) => {
        if(err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static updateRecommendByCondition(condition, obj) {
    return new Promise((resolve, reject) => {
      Recommend.update(condition, obj, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
  static deleteRecommendByCondition(condition) {
    return new Promise((resolve, reject) => {
      Recommend.remove(condition, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve({});
        }
      });
    });
  }
}

module.exports = RecommendDao;
