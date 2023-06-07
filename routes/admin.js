const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin/admin_users_controller')

router.get('/admin', adminController.getSubsriber)


module.exports = router