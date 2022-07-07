const Router = require("koa-router");
const { getMenuInfoByRoleId } = require("../controller/role.controller");

// 创建一个 userRouter 路由
const menuRouter = new Router({ prefix: "/role" });

menuRouter.get("/:roleId/menu", getMenuInfoByRoleId);

module.exports = menuRouter;
