const errorTypes = require('../constants/error-types')
const userService = require('../service/user.service')
const { PUBLIC_KEY } = require('../app/config')
const jwt = require('jsonwebtoken')

// 验证用户登录的中间件
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

  // 验证通过，放行之前，存一下 user, 用来生成 token
  ctx.user = userInfo
  await next()
}

// 用于解析验证 token 的中间件
const verifyAuth = async (ctx, next) => {
  console.log("验证授权中间件~");
  // 1、获取 token
  const authorization = ctx.header.authorization;

  if(!authorization){
    const error = new Error(errorTypes.UNAUTHORIZATION);
    return ctx.app.emit('error', error, ctx);
  }

  const token = authorization.replace('Bearer ','');

  // 2、验证 token(id、name/iat/exp)
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"]
    })
    console.log('验证result结果：', result);
    ctx.user = result;
    await next()
  } catch (err) {
    console.log(err);
    const error = new Error(errorTypes.UNAUTHORIZATION)
    ctx.app.emit('error', error, ctx)
  }
}

module.exports = {
  verifyLogin,
  verifyAuth
}