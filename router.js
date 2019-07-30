const express = require('express')
const heroController = require('./controller/heroController')
const router = express.Router()
router.use('/static', express.static('static'))
router.get('/index', heroController.showIndex)
router.get('/add', heroController.showAdd)
router.get('/api/deleteHero', heroController.deleteHero)
router.get('/api/getHero', heroController.getHero)
router.post('/api/addHero', heroController.addHero)
router.post('/api/editHero', heroController.editHero)
module.exports = router
