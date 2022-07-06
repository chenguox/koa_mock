// 使用 mock 数据代替数据库
const user = require("../mocks/user");

class UserService {
  // 根据姓名获取用户的账号和密码
  async getUserInfoByName(name){
    const userInfo = user.userInfoByName
    console.log(userInfo);
    return userInfo
  }

  // 根据用户id获取用户信息
  async getUserById(id) {
    const userInfo = user.userInfo;
    return userInfo;
  }
}

module.exports = new UserService();
