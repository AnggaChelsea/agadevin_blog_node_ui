const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/index')

const app = express()
app.use(bodyParser.urlencoded())
app.use(router)
app.use(express.static('public'))
app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(3000, () => {
    console.log('port listen localhost:3000')
})