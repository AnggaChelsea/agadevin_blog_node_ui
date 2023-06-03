const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../helpers/path')
const homeController = require('../controllers/home_controllers')

router.get('/home', homeController.getHome)

router.post('/contact-us', (req, res, next) => {})


module.exports = router