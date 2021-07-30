const GroupsModel = require('../../models/wechat/Groups')
const formidable = require("formidable")
const { v4: uuidv4 } = require('uuid');
const WechatComponent = require('../../prototype/wechatComponent')

class GroupHandle extends WechatComponent {
  constructor() {
    super()
    this.getGroupList = this.getGroupList.bind(this);
  }
  async getGroupList(req, res, next) {
    const type = req.query.type;
    let groupsList;
    try{
      groupsList = await GroupsModel.find({});
      res.send(groupsList);
    }catch(err) {
      res.send({
        name: 'ERROR_DATA',
        message: '获取数据失败',
      });
    }
  }
  async addGroup(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      try{
        if (!fields.name) {
          throw new Error('群名称必填！');
        }else if(!fields.groupImagePath) {
          throw new Error('上传图片失败！');
        }else if(!fields.description) {
          throw new Error('描述信息不能为空');
        }
        const newGroup = new GroupsModel({
          id: uuidv4(),
          groupImagePath: fields.groupImagePath,
          name: fields.name,
          description: fields.description,
          uploadTime: new Date().getTime()
        });
        await newGroup.save();
        res.send({
          status: 1,
          success: '添加成功',
        });
      }catch(err) {
        res.send({
          status: 0,
          type: 'ERROR_DATA',
          message: err.message
        })
      }
    })
  }
  async editGroup(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.send({
          status: 0,
          type: 'ERROR_FORM',
          message: '表单信息错误',
        })
        return 
      }
      const {groupId} = fields;
      try{
        if (!groupId) {
          throw new Error('参数错误');
        }
        const group = await GroupsModel.findOne({id: groupId})
        if(!group) {
          throw new Error('没有相关信息');
        }
        let newData = group
        for(let key in fields) {
          newData[key] = fields[key] || group[key]
        }
        await GroupsModel.findOneAndUpdate({id: groupId}, {$set: newData});

        res.send({
          status: 1,
          success: '修改成功',
        })
      }catch(err) {
        console.log(err.message, err);
        res.send({
          status: 0,
          type: 'ERROR_UPDATE',
          message: err.message,
        })
      }
    })
  }
  async deleteGroup(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      const id = fields.groupId
      const group = await GroupsModel.findOne({id});
      if (!id || !group) {
        res.send({
          status: 0,
          type: 'ERROR_PARAMS',
          message: '该信息不存在'
        })
        return 
      }
      try{
        await group.remove()
        res.send({
          status: 1,
          success: '删除成功'
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
module.exports = new GroupHandle()