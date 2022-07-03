const user = require("../mocks/user");

class UserService {
  async getUserById(id) {
    // 获取 mock 假数据，即假设是从数据库查询到数据
    const userInfo = user.userInfo;
    // 将数据返回
    return userInfo;
  }
}

module.exports = new UserService();
