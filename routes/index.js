const express = require('express')
const router = express.Router()
const adminRouter = require('./admin')
const homeRouter = require('./home')

router.use('/admin', adminRouter)
router.use('/', homeRouter)

module.exports = router