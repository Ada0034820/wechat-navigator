'use strict';

const express = require('express')
const GroupHandle = require('../controller/wechat/groups.js')

const router = express.Router();
router.get('/groups', GroupHandle.getGroupList);
router.post('/addGroup', GroupHandle.addGroup);
router.post('/editGroup', GroupHandle.editGroup);
router.post('/deleteGroup', GroupHandle.deleteGroup);
module.exports = router