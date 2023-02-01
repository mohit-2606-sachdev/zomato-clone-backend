const express = require('express')
const paymentControler = require('../controller/payment')

const router = express.Router()

router.post('/order',paymentControler.getCheckout)
router.post('/save',paymentControler.saveTransaction)

module.exports= router;