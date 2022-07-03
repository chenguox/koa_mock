const dotenv = require("dotenv");

// 排查 dotenv 错误，.env 应该放在根目录下
// console.log(require("dotenv").config());

dotenv.config();

module.exports = { APP_PORT } = process.env;
