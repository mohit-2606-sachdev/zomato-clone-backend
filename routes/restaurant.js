const express = require('express')
const router = express.Router()
const Restaurant = require('../controller/restaurant')

router.get('/city/:id',Restaurant.getRestaurant)
router.get('/city/name/:name',Restaurant.getRestaurantDetails)
router.post('/filter/:page',Restaurant.getPageByNumber)

module.exports = router;