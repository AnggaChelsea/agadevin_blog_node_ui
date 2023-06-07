const express = require('express')
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./routes/index')
const rootDir = require('./helpers/path')
const mongooseConnect = require('./config/db/mongo_connect')
const port = 3000
const expressLayout = require('express-ejs-layouts')

const app = express()


app.set('view engine', 'ejs');
app.set('views', 'views')
app.use(bodyParser.urlencoded())
app.use(router)
app.use(express.static('public'))
app.use((req, res, next) => {
    res.status(404).render('page_not_found')
})
app.use(expressLayout)
// app.use(mongooseConnect())
// router.get('/', (req, res, next) => {
//     res.render('index', {index: true})
// })

// Set Cookie Parser, sessions and flash
app.use(cookieParser('NotSoSecret'));
app.use(session({
  secret : 'something',
  cookie: { maxAge: 60000 },
  resave: true,
  saveUninitialized: true
}));
app.use(flash());


mongooseConnect()

app.listen(port, () => {
    console.log('port listen localhost:3000')
})