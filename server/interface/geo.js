const Router = require('koa-router')
const axios = require('axios')
const Menu = require('../dbs/models/menu')

let router = new Router({
  prefix: '/geo'
})

router.get('/menu', async (ctx) => {
  const result = await Menu.find()
  ctx.body = {
    menu: result
  }
})

module.exports = router