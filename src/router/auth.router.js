const Router = require('koa-router')

const authRouter = new Router()

// 具体登录操作交给控制层
const { verifyLogin, verifyAuth } = require('../middleware/auth.middleware')
const { login, success } = require('../controller/auth.controller')

// 登录之前需要先执行 verifyLogin 中间件做校验
authRouter.post('/login', verifyLogin, login)

// 燕来测试解析token, 验证 token 正不正确
authRouter.get('/test', verifyAuth, success)

module.exports = authRouter