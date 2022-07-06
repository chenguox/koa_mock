const Router = require('koa-router')

const authRouter = new Router()

// 具体登录操作交给控制层
const { verifyLogin } = require('../middleware/auth.middleware')
const { login } = require('../controller/auth.controller')

// 登录之前需要先执行 verifyLogin 中间件做校验
authRouter.post('/login', verifyLogin, login)

module.exports = authRouter