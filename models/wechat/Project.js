"use strict";

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  id: { type: String, isRequired: true },
  title: { type: String, isRequired: true },
  desc: { type: String, isRequired: true },
  imgUrls: { type: Array, isRequired: true },
  updateDate: { type: Number, default: false },
  topStatus: { type: Number, default: 0 }
});

const Projects = mongoose.model("Projects", projectSchema);

module.exports = Projects;
