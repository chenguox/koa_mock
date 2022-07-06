const Koa = require("koa");
// 前端采用json的方式传数据过来，可以使用 koa-bodyparser 来处理
const bodyParser = require('koa-bodyparser')
const useRoutes = require("../router");
const errorHandler = require('./error-handle');

const app = new Koa();

app.useRoutes = useRoutes;
app.use(bodyParser())
app.useRoutes();

// 添加一个 'error' 侦听器
app.on('error', errorHandler)

module.exports = app;
