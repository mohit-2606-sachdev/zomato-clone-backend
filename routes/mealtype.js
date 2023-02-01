const express = require('express')
const router = express.Router()
const Mealtype = require('../controller/mealtype')

router.get('/',Mealtype.getMealType)

module.exports = router;