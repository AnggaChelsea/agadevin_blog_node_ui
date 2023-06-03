const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./routes/index')
const rootDir = require('./helpers/path')

const app = express()
app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(bodyParser.urlencoded())
app.use(router)
app.use(express.static('public'))
// app.use((req, res, next) => {
//     res.status(404).send('<h1>Page Not Found</h1>')
// })
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'))
})

app.listen(3000, () => {
    console.log('port listen localhost:3000')
})