const formidable = require("formidable");
const path = require("path");
const UsersModel = require("../models/wechat/Users");
const fs = require("fs");
class BaseComponent {
  constructor() {
    this.uploadImg = this.uploadImg.bind(this);
    this.saveImgsAndGetPathArray = this.saveImgsAndGetPathArray.bind(this);
  }
  async uploadImg(req, res, next) {
    try {
      //const image_path = await this.qiniu(req, type);
      const image_path = await this.getPath(req, res);
      res.send({
        status: 1,
        image_path,
      });
    } catch (err) {
      res.send({
        status: 0,
        type: "ERROR_UPLOAD_IMG",
        message: "上传图片失败" + err.toString(),
      });
    }
  }
  async saveImgsAndGetPathArray(files) {
    return new Promise((resolve, reject) => {
      const form = formidable.IncomingForm();
      form.uploadDir = "./public/img";
      let pathNameArr = []
      for (let key in files) {
        let file = files[key]
        const hashName = (
          new Date().getTime() + Math.ceil(Math.random() * 10000)
        ).toString(16);
        const extname = path.extname(file.name);
        console.log(file.path);
        if (![".jpg", ".jpeg", ".png"].includes(extname)) {
          fs.unlinkSync(file.path);
          res.send({
            status: 0,
            type: "ERROR_EXTNAME",
            message: "文件格式错误",
          });
          reject("上传失败");
          return;
        }
        const fullName = hashName + extname;
        const repath = "./public/img/" + fullName;
        try {
          fs.renameSync(file.path, repath);
          pathNameArr.push("/img/" + fullName)
        } catch (err) {
          if (fs.existsSync(repath)) {
            fs.unlinkSync(repath);
          } else {
            fs.unlinkSync(file.path);
          }
          reject("保存图片失败");
        }
      }
      resolve(pathNameArr);
    });
  }


  async getPath(req, res) {
    return new Promise((resolve, reject) => {
      const form = formidable.IncomingForm();
      form.uploadDir = "./public/img";
      form.parse(req, async (err, fields, files) => {
        console.log(files);
        const hashName = (
          new Date().getTime() + Math.ceil(Math.random() * 10000)
        ).toString(16);
        const extname = path.extname(files.file.name);
        console.log(files.file.path);
        if (![".jpg", ".jpeg", ".png"].includes(extname)) {
          fs.unlinkSync(files.file.path);
          res.send({
            status: 0,
            type: "ERROR_EXTNAME",
            message: "文件格式错误",
          });
          reject("上传失败");
          return;
        }
        const fullName = hashName + extname;
        const repath = "./public/img/" + fullName;
        try {
          fs.renameSync(files.file.path, repath);
          resolve("/img/" + fullName);
        } catch (err) {
          if (fs.existsSync(repath)) {
            fs.unlinkSync(repath);
          } else {
            fs.unlinkSync(files.file.path);
          }
          reject("保存图片失败");
        }
      });
    });
  }
  async checkLogin(openid) {
    const user = await UsersModel.findOne({
      openid: openid,
    });
    return user;
  }
}
module.exports = BaseComponent;
