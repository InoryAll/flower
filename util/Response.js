/**
 * 用于返回对应的值，主要是状态
 */
class Response{
  static ok(data) {
    if(data.paginator) {
      return {
        code: 1,
        message: '成功',
        data: data.formatdata,
        paginator: data.paginator,
      };
    }
    return {
      code: 1,
      message: '成功',
      data: data,
    };
  }
  static error(err) {
    return {
      code: 0,
      message: err.message,
    };
  }
}

module.exports = Response;
