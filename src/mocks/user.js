const Mock = require("mockjs");

// 根据id获取用户的信息
const userInfo = Mock.mock({
  name: "小明",
  "age|1-100": 1,
  "role|1-10": 1,
});

module.exports = {
  userInfo,
};
