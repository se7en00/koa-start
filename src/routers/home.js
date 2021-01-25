/*
 * @Date: 2021-01-25 17:23:15
 * @LastEditors: jian sun
 * @LastEditTime: 2021-01-25 17:31:57
 */
const Router = require('koa-router')
const router = new Router()
const { index } = require('../controllers/homeCtl')

router.get('/', index)

module.exports = router