const wechat = require("./wechat")
const wxProject = require("./wxProject")
const admin = require("./admin")
module.exports = app => {
  app.use('/wechat', wechat)
  app.use('/admin', admin)
  app.use('/wxProject', wxProject)
}