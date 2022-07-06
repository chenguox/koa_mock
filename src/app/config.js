const dotenv = require("dotenv");
const fs = require('fs')
const path = require('path')

// 排查 dotenv 错误，.env 应该放在根目录下
// console.log(require("dotenv").config());

dotenv.config();

const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname,'./keys/private.key'))
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname,'./keys/public.key'))


module.exports = { APP_PORT } = process.env;
module.exports.PRIVATE_KEY = PRIVATE_KEY
module.exports.PUBLIC_KEY = PUBLIC_KEY