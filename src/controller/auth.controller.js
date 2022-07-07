const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')
const handleResult = require('../utils/result-handle')

class AuthController {
  async login(ctx, next) {
    // 获取用户信息
    const { id, name } = ctx.user;
    // 生成 token
    const token = jwt.sign({
      id, name
    }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24, // 一天
      algorithm: 'RS256'
    })

    // 返回数据
    ctx.body = handleResult({ id, name, token })
  }

  async success(ctx, next) {
    ctx.body = "授权成功"
  }
}

module.exports = new AuthController()