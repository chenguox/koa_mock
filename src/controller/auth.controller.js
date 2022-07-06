class AuthController {
  async login(ctx,next){
    const { id,name } = ctx.request.body;
    console.log(ctx);
    ctx.body = `用户${name}登录成功`
  }
}

module.exports = new AuthController()