const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../helpers/path')
const homeController = require('../controllers/home_controllers')
const middlewareHome = require('../middleware/response/reponse_home')

router.get('/', homeController.getHome)

router.post('/subcribe', middlewareHome, homeController.addSubsribe)


module.exports = router