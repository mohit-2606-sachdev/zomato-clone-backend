const mongoose = require('mongoose')

const mealSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Mealtype', mealSchema, 'mealtype');