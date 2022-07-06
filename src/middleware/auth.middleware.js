const errorTypes = require('../constants/error-types')
const userService = require('../service/user.service')

const verifyLogin = async (ctx, next) => {
  // 1、获取用户名和密码
  const { name, password } = ctx.request.body;

  // 2、 判断用户名和密码是否为空
  if (!name || !password) {
    const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 3、判断用户是否存在，实际应从数据库查询用户数据来做判断
  const userInfo = await userService.getUserInfoByName(name)
  if (name !== userInfo.name) {
    const error = new Error(errorTypes.USER_DOES_NOT_EXISIS)
    return ctx.app.emit('error', error, ctx)
  }

  // 4、判断密码是否正确，实际应从数据库中的密码一致（）
  if (password !== userInfo.password) {
    const error = new Error(errorTypes.PASSWORD_IS_INCORRENT)
    return ctx.app.emit('error', error, ctx)
  }

  ctx.user = userInfo
  await next()
}

module.exports = {
  verifyLogin
}