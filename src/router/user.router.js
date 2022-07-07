const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth.middleware")
const { getUserInfoById } = require("../controller/user.controller");

// 创建一个 userRouter 路由
const userRouter = new Router({ prefix: "/users" });

userRouter.get("/:userId", verifyAuth, getUserInfoById);

module.exports = userRouter;
