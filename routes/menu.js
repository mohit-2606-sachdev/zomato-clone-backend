const express = require('express')
const router = express.Router()
const Menu = require('../controller/Menu')

router.get('/',Menu.getMenu)

module.exports = router;