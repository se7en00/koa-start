/*
 * @Date: 2021-01-25 17:31:18
 * @LastEditors: jian sun
 * @LastEditTime: 2021-01-25 17:31:18
 */
class HomeCtl {
    index(ctx) {
      ctx.body = '这是主页'
    }
  }
  
  module.exports = new HomeCtl()