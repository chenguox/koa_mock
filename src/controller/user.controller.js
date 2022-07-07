const userService = require("../service/user.service");
const handleReulst = require('../utils/result-handle')

class UserController {
  async getUserInfoById(ctx, next) {
    // 获取用户请求传递的参数
    const { userId } = ctx.params;

    // 查询数据
    const result = await userService.getUserById(userId);

    // 返回数据
    ctx.body = handleReulst(result);
  }
}

module.exports = new UserController();
