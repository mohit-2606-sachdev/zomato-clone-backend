const Razorpay = require('razorpay')
var instance = new Razorpay({ key_id: 'rzp_test_L5xt4eSGmwgh6B', key_secret: 'SrCLFr4KgGakfLVADccgv3pu' })
const shortid = require('shortid')
const Transaction = require('../models/Transaction')



exports.getCheckout =async (req,res) =>{

  console.log(req.body.body)
  var options = {
    amount: req.body.body * 100,
    currency: "INR",
    receipt: shortid.generate()
  };
  instance.orders.create(options, function(err, order) {
    res.json(order);
  });
}

exports.saveTransaction=(req,res)=>{

  Transaction.create({
    transaction_Id:req.body.body.response.razorpay_payment_id,
    transaction_amount:req.body.body.amount
  })
}
