const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../helpers/path')

router.get('./contactus', (req, res, next) => {
    console.log(req.body)
    res.redirect('/home')
})

module.exports = router