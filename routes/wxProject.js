"use strict";

const express = require("express");
const ProjectsHandle = require("../controller/wechat/project");

const router = express.Router();
router.post("/addimg", ProjectsHandle.uploadImg);
router.post("/addProjects", ProjectsHandle.addProjects);
router.post("/addFrontEndShareId", ProjectsHandle.addFrontEndShareId);
router.post("/helpFrontEndShareId", ProjectsHandle.helpFrontEndShareId);
router.get("/getFrontEndShareIdInfo", ProjectsHandle.getFrontEndShareIdInfo);
router.get("/getProjectsList", ProjectsHandle.getProjectsList);
router.get("/getProjectById", ProjectsHandle.getProjectById);
module.exports = router;
