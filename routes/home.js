const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../helpers/path')
const homeController = require('../controllers/home_controllers')

router.get('/', homeController.getHome)

router.post('/', homeController.addSubsribe)


module.exports = router