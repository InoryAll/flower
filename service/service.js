var dao = require('../dao/dao');

exports.getOpenId = function (req, res, next) {
  var code = req.body.code;
  dao.doFetchOpenId(code, function (data) {
    console.log(data);
    res.status(200).json(JSON.parse(data));
  });
};

exports.saveUserShare = function (req, res, next) {
  var object = req.body;
  dao.addUserShare(object, function (err, message) {
    if (!err) {
      message = { code: '0', msg: '记录成功' };
    } else {
      console.log(err.message);
      message = { code: '1', msg: '记录失败' };
    }
    res.status(200).json(message);
  });
};