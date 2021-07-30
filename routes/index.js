const wechat = require("./wechat")
const admin = require("./admin")
module.exports = app => {
  app.use('/wechat',wechat)
  app.use('/admin',admin)
}