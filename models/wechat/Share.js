"use strict";

const mongoose = require("mongoose");

const shareSchema = new mongoose.Schema({
  shareId: { type: String, isRequired: true },
  startTime: { type: Number, isRequired: true },
  scan: { type: Number, isRequired: true },
  helpArr: { type: Array, isRequired: true, default: [] },
});

const share = mongoose.model("Share", shareSchema);

module.exports = share;
