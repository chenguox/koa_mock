const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')

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
    ctx.body = { id, name, token }
  }
}

module.exports = new AuthController()