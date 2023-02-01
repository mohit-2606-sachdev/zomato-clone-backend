const express = require('express')
const router = express.Router()
const Location = require('../controller/Location')

router.get('/',Location.getLocation)

module.exports = router;