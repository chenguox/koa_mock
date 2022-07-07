const Mock = require("mockjs");

// 根据用户名获取用户信息
const userInfoByName = Mock.mock({
  id: '1',
  name: "admin",
  password: '123456',
})

// 根据用户的id获取用户的信息
const userInfoById = Mock.mock({
  id: 1,
  name: 'admin',
  realName: '小明',
  "age|1-100": 1,
  role: 1,
})

module.exports = {
  userInfoByName,
  userInfoById
};
