const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../helpers/path')

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'))
})

router.post('/contact-us', (req, res, next) => {})


module.exports = router