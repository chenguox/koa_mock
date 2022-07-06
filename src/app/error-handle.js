const errorTypes = require('../constants/error-types')

// 当发送错误，就来这里执行这里的错误处理逻辑
const errorHandler = (error, ctx) => {
  // 错误处理逻辑
  let status, message;

  // 通过 switch 来对不同错误进行匹配
  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400; // Bad Request
      message = "用户名或者密码不能为空";
      break;
    case errorTypes.USER_ALREADY_EXISTS:
      status = 409; // conflict
      message = "用户名已经存在~";
      break;
    case errorTypes.USER_DOES_NOT_EXISIS:
      status = 400; // 参数错误
      message = "用户不存在~";
      break;
    case errorTypes.PASSWORD_IS_INCORRENT:
      status = 400;
      message = "密码是错误的~";
      break;
    default:
      status = 404;
      message = "NOT FOUND";
  }

  // 设置返回的状态和消息
  ctx.status = status;
  ctx.body = message;
}

module.exports = errorHandler;