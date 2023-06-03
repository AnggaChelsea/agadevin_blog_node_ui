const express = require('express')
const router = express.Router()
const adminRouter = require('./admin')
const homeRouter = require('./home')
const contactusRouter = require('./contactus')

router.use('/admin', adminRouter)
router.use('/', homeRouter)
router.use('/', contactusRouter)

module.exports = router