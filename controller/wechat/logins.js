const GroupsModel = require("../../models/wechat/Groups");
const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const WechatComponent = require("../../prototype/wechatComponent");

class LoginHandle extends WechatComponent {
  constructor() {
    super();
  }
  async getAccessToken(req, res, next) {
    try {
      const code = req.query.code;
      let url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx8e909dc564460200&secret=9c6413b62c2174ef7d9f03e8883c1252&code=${code}&grant_type=authorization_code`;
      res.send("getAccessToken" + code);
    } catch (err) {
      res.send({
        name: "ERROR_DATA",
        message: "获取数据失败",
      });
    }
  }
}
module.exports = new LoginHandle();
