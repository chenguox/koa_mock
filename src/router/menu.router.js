const Router = require("koa-router");
const { getMenuInfoByRoleId } = require("../controller/menu.controller");

// 创建一个 userRouter 路由
const menuRouter = new Router({ prefix: "/role" });

menuRouter.get("/:roleId", getMenuInfoByRoleId);

module.exports = menuRouter;
