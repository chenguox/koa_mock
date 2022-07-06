// node 自带的 crypto 库，可以用来使用 md5 加密
const crypto = require('crypto');

const md5password = (password) => {
  const md5 = crypto.createHash('md5');
  const result = md5.update(password).digest('hex');
  return result;
}

module.exports = md5password;