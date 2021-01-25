/*
 * @Date: 2021-01-25 17:20:05
 * @LastEditors: jian sun
 * @LastEditTime: 2021-01-25 17:33:49
 */

const Router = require('koa-router')
const {find, findById} = require('../controllers/userCtl')

// **配置路由前缀**
const router = new Router({
  prefix: '/users'
})

router.get('/', find)
router.get('/:id', findById)

module.exports = router