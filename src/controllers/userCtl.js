/*
 * @Date: 2021-01-25 17:32:16
 * @LastEditors: jian sun
 * @LastEditTime: 2021-01-25 17:42:02
 */
class UsersCtl {
    async find(ctx) {
      // 操作数据库一定要 await
      ctx.body = '用户列表222'
    }
    
    async findById(ctx) {
      ctx.body = `用户id：${ctx.params.id}`
    }
  }
  
  module.exports = new UsersCtl()
