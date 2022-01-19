const ProjectsModel = require("../../models/wechat/Project");
const shareModel = require("../../models/wechat/Share");
const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const request = require("request");
const WechatComponent = require("../../prototype/wechatComponent");

class ProjectsHandle extends WechatComponent {
  constructor() {
    super();
    this.addProjects = this.addProjects.bind(this);
  }
  async addProjects(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      try {
        if (!fields.title) {
          throw new Error("标题必填！");
        } else if (!fields.desc) {
          throw new Error("描述必填");
        } else if (!files) {
          throw new Error("至少传一张图片");
        }
        let imgUrls = await this.saveImgsAndGetPathArray(files)
        const newProject = new ProjectsModel({
          id: uuidv4(),
          title: fields.title,
          desc: fields.desc,
          topStatus: fields.topStatus,
          imgUrls: imgUrls,
          updateDate: new Date().getTime(),
        });
        await newProject.save();
        res.send({
          status: 1,
          success: "添加成功",
        });
      } catch (err) {
        res.send({
          status: 0,
          type: "ERROR_DATA",
          message: err.message,
        });
      }
    });
  }
  async getProjectsList(req, res, next) {
    let ProjectsList;
    try {
      ProjectsList = await ProjectsModel.find({});
      res.send(ProjectsList);
    } catch (err) {
      res.send({
        name: "ERROR_DATA",
        message: "获取数据失败",
      });
    }
  }
  async getProjectById(req, res, next) {
    let { id } = req.query
    try {
      const project = await ProjectsModel.findOne({ id });
      res.send(project);
    } catch (err) {
      res.send({
        name: "ERROR_DATA",
        message: err.message,
      });
    }
  }

  async addFrontEndShareId(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      let { shareId } = fields
      try {
        let newShareObj = {
          shareId: shareId,
          startTime: new Date().getTime(),
          helpArr: [],
          scan: 0,
        }
        const newShare = new shareModel(newShareObj);
        await newShare.save();
        res.send(newShareObj);
      } catch (err) {
        res.send({
          name: "ERROR_DATA",
          message: err.message,
        });
      }
    })

  }
  async getFrontEndShareIdInfo(req, res, next) {
    let { shareId } = req.query
    console.log(shareId)
    try {
      const share = await shareModel.findOne({ shareId });
      console.log(share)
      res.send(share);
    } catch (err) {
      res.send({
        name: "ERROR_DATA",
        message: err.message,
      });
    }
  }
  async helpFrontEndShareId(req, res, next) {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      try {
        let { shareId, helpId } = fields
        if (shareId === helpId) {
          throw new Error("不能给自己助力");
        }
        const help = await shareModel.findOne({ shareId: helpId });
        console.log(help)
        if (!help) {
          throw new Error("助力失败");
        }
        if (help.helpArr.includes(shareId)) {
          throw new Error("已助力");
        }

        help.scan++
        help.helpArr.push(shareId)

        await shareModel.findOneAndUpdate({ shareId: helpId }, { $set: help });
        res.send({
          help: help,
          message: "助力成功",
        });
      } catch (err) {
        console.log(err)
        res.send({
          name: "ERROR_DATA",
          help: false,
          message: err.message,
        });
      }
    })
  }
  async getRecordsByOpenid(req, res, next) {
    let { openid } = req.query;
    try {
      const groups = await GroupsModel.find({
        "userInfo.openid": openid,
      });
      console.log(openid, groups);
      let result = { groups };
      res.send(result);
    } catch (err) {
      res.send({
        name: "ERROR_DATA",
        message: err.message,
      });
    }
  }
}
module.exports = new ProjectsHandle();
