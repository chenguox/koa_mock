const Router = require("koa-router");
const { getUserInfoById } = require("../controller/user.controller");

// 创建一个 userRouter 路由
const userRouter = new Router({ prefix: "/users" });

userRouter.get("/:userId", getUserInfoById);

module.exports = userRouter;
