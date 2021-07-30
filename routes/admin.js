'use strict';

const express = require('express')
const GroupAdminHandle = require('../controller/admin/groups')

const router = express.Router();
router.post('/deleteGroupLimit', GroupAdminHandle.deleteGroupLimit);
module.exports = router