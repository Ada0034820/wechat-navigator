const GroupsModel = require('../../models/wechat/Groups')
const formidable = require("formidable")
const { v4: uuidv4 } = require('uuid');
const WechatComponent = require('../../prototype/wechatComponent')

class GroupAdminHandle extends WechatComponent {
  constructor() {
    super()
  }
  async deleteGroupLimit(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (!fields.type) {
        res.send({
          status: 0,
          type: 'ERROR_PARAMS',
          message: '参数错误'
        })
        return 
      }
      let groups
      if(fields.type === 'number') {
        if (!fields.limit || !fields.index) {
          throw new Error("缺少参数")
        }
        groups = await GroupsModel.remove().limit(Number(fields.limit)).skip(Number(fields.index))
      }else if(fields.type === 'date') {
        let date = new Date(fields.date).getTime() || ((new Date().getTime()) - 7 * 24 * 60 * 60 * 1000)
        groups = await GroupsModel.$where(`Number(this.uploadTime)<${date}`).remove()
      }else{
        throw new Error("参数错误")
      }
      try{
        res.send({
          status: 1,
          success: '删除成功',
          data: groups
        })
      }catch(err) {
        res.send({
          status: 0,
          type: 'DELETE_FAILED',
          message: err.message
        })
      }
    })
  }
}
module.exports = new GroupAdminHandle()