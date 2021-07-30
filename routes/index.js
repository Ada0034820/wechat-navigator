const wechat = require("./wechat.js")
const admin = require("./admin.js")
module.exports = app => {
  app.use('/wechat',wechat)
  app.use('/admin',admin)
}