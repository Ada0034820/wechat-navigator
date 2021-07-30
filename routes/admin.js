'use strict';

const express = require('express')
const GroupAdminHandle = require('../controller/admin/groups.js')

const router = express.Router();
router.post('/deleteGroupLimit', GroupAdminHandle.deleteGroupLimit);
module.exports = router