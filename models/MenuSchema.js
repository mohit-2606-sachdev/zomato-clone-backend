const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
    restaurantId: {
        type: String,
        require: true
    },
    itemPrice: {
        type: Number,
        require: true
    },

    itemName: {
        type: String,
        require: true
    },

    itemDescription: {
        type: String,
        require: true
    }
    ,

    isVeg: {
        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model('Menu', menuSchema, 'menu');