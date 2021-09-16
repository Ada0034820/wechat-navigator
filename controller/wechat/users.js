const UsersModel = require("../../models/wechat/Users");
const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const request = require("request");
const WechatComponent = require("../../prototype/wechatComponent");

class UsersHandle extends WechatComponent {
  constructor() {
    super();
    this.wechatUserRegister = this.wechatUserRegister.bind(this);
  }
  async getWechatUserInfo(req, res, next) {
    var _this = this;
    try {
      const code = req.query.code;
      let url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx8e909dc564460200&secret=9c6413b62c2174ef7d9f03e8883c1252&code=${code}&grant_type=authorization_code`;
      request(url, function (error, response, body) {
        var responseBody = JSON.parse(response.body);
        if (responseBody.access_token) {
          let scopeUserInfoUrl = `https://api.weixin.qq.com/sns/userinfo?access_token=${responseBody.access_token}&openid=${responseBody.openid}&lang=zh_CN`;
          request(scopeUserInfoUrl, async (error, _response, body) => {
            var wechatUserInfo = JSON.parse(_response.body);
            // const user = await UsersModel.findOne({
            //   openid: wechatUserInfo.openid,
            // });
            // if (!user) {
            //   await _this.wechatUserRegister(wechatUserInfo);
            // }
            res.send(_response.body.openid);
          });
        } else {
          res.send(response.body);
        }
      });
    } catch (err) {
      res.send({
        name: "ERROR_DATA",
        message: "获取数据失败",
      });
    }
  }
  async wechatUserRegister(data) {
    data["registerTime"] = new Date().getTime();
    const newUser = new UsersModel(data);
    await newUser.save();
  }
  async getUserList(req, res, next) {
    let usersList;
    try {
      usersList = await UsersModel.find({});
      res.send(usersList);
    } catch (err) {
      res.send({
        name: "ERROR_DATA",
        message: "获取数据失败",
      });
    }
  }
}
module.exports = new UsersHandle();
