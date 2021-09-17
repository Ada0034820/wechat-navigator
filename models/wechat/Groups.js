"use strict";

const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  id: { type: String, isRequired: true },
  groupImagePath: { type: String, isRequired: true },
  name: { type: String, isRequired: true },
  description: { type: String, isRequired: true },
  top: { type: Boolean, default: false },
  topDate: { type: Number, default: 0 },
  status: { type: Number, default: 0 },
  userInfo: { type: Object, isRequired: true },
  uploadTime: { type: String, isRequired: true },
});

const Groups = mongoose.model("Groups", groupSchema);

module.exports = Groups;
