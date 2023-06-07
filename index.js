const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./routes/index')
const rootDir = require('./helpers/path')
const mongooseConnect = require('./config/db/mongo_connect')
const port = 3000

const app = express()
app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(bodyParser.urlencoded())
app.use(router)
app.use(express.static('public'))
app.use((req, res, next) => {
    res.status(404).render('page_not_found')
})
// app.use(mongooseConnect())
// router.get('/', (req, res, next) => {
//     res.render('index', {index: true})
// })
mongooseConnect()

app.listen(port, () => {
    console.log('port listen localhost:3000')
})