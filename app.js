const express = require('express')
const MongoStore = require('connect-mongo');
const session = require('express-session')
const config = require('config-lite')(__dirname);
const router = require('./routes/index.js')
const db = require('./mongodb/db.js')
// import config from 'config-lite';
const app = express()
const port = 3000

app.use(session({
  name: config.session.name,
  secret: config.session.secret,
  resave: true,
  saveUninitialized: false,
  cookie: config.session.cookie,
  store: MongoStore.create({
    mongoUrl: config.url
  })
}))
router(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})