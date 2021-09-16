"use strict";

const mongoose = require("mongoose");
// {
//   "openid":"ocUxg6CMNUhWq4OXBI2hGZZ3hM7I",
//   "nickname":"Liang",
//   "sex":1,
//   "language":"zh_CN",
//   "city":"",
//   "province":"",
//   "country":"蒙古",
//   "headimgurl":"https:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/DYAIOgq83eoroLeibQB1g8casNrdg64jTVU4qAj0myV39cib9a3lI7ibDS77K3q7E9QJpp44b70vgGrb8CzbPvgibw\/132",
//   "privilege":[]
// }
const userSchema = new mongoose.Schema({
  openid: { type: String, isRequired: true },
  nickname: { type: String, isRequired: true },
  sex: { type: String, isRequired: true },
  language: { type: String, isRequired: true },
  city: { type: String, isRequired: true },
  province: { type: String, isRequired: true },
  country: { type: String, isRequired: true },
  headimgurl: { type: String, isRequired: true },
  privilege: { type: String, isRequired: true },
  registerTime: { type: String, isRequired: true },
});

const Groups = mongoose.model("Users", userSchema);

module.exports = Groups;
