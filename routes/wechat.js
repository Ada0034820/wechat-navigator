"use strict";

const express = require("express");
const GroupHandle = require("../controller/wechat/groups");
const UsersHandle = require("../controller/wechat/users");

const router = express.Router();
router.get("/groups", GroupHandle.getGroupList);
router.post("/addimg", GroupHandle.uploadImg);
router.post("/addGroup", GroupHandle.addGroup);
router.post("/editGroup", GroupHandle.editGroup);
router.post("/deleteGroup", GroupHandle.deleteGroup);
router.get("/getWechatUserInfo", UsersHandle.getWechatUserInfo);
router.get("/getUserList", UsersHandle.getUserList);
module.exports = router;
