const fs = require("fs");

const useRoutes = function () {
  // 读取当前目录的所有文件，遍历处理
  fs.readdirSync(__dirname).forEach((file) => {
    // 排除当前这个文件，不然无限循环
    if (file === "index.js") return;
    const router = require(`./${file}`);
    // 将router注册为中间件
    this.use(router.routes());
    // 判断method是否支持
    this.use(router.allowedMethods());
  });
};

module.exports = useRoutes;
