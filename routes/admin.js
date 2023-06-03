const express = require('express')
const router = express.Router()

router.get('/admin', (req, res) => {
    res.render('template/index.html', {
        title: 'Admin Page'
    })
})


module.exports = router