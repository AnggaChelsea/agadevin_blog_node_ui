const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../helpers/path')

router.get('/admin', (req, res) => {
    const today = new Date()
    const yesterday = new Date(today.setDate(today.getDay() - 1))
    console.log(yesterday)
    console.log(today)
    res.render('admin/admin',{day: today })
})


module.exports = router