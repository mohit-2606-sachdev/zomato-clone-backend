const Mealtype = require('../models/MealtypeSchema')

exports.getMealType = (req, res) => {
    Mealtype.find().then(result => {
        res.status(200).json(result)
    })
}