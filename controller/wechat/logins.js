const GroupsModel = require("../../models/wechat/Groups");
const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const request = require("request");
const WechatComponent = require("../../prototype/wechatComponent");

class LoginHandle extends WechatComponent {
  constructor() {
    super();
  }
  async getWechatUserInfo(req, res, next) {
    try {
      const code = req.query.code;
      let url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx8e909dc564460200&secret=9c6413b62c2174ef7d9f03e8883c1252&code=${code}&grant_type=authorization_code`;
      request(url, function (error, response, body) {
        if (response.body["access_token"]) {
          let scopeUserInfoUrl = `https://api.weixin.qq.com/sns/userinfo?access_token=${response.body["access_token"]}&openid=${response.body["openid"]}&lang=zh_CN`;
          request(scopeUserInfoUrl, function (error, response, body) {
            res.send(response.body);
          });
        } else {
          res.send(response.body["access_token"]);
        }
      });
    } catch (err) {
      res.send({
        name: "ERROR_DATA",
        message: "获取数据失败",
      });
    }
  }
}
module.exports = new LoginHandle();
