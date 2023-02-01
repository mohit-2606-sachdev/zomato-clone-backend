const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
    transaction_Id: {
        type: String,
        require: true
    },
    transaction_amount: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Transaction', transactionSchema);