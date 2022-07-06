const menus = require("../mocks/menu");

class MenuService {
  async getMenuByRoleId(roleId) {
    let currentMenu = null

    // 返回管理员的菜单权限数据
    if (roleId === '1') {
      currentMenu = menus.adminRoutes
    } else {
      currentMenu = menus.editorRoutes
    }

    // 将数据返回
    return currentMenu;
  }
}

module.exports = new MenuService();
