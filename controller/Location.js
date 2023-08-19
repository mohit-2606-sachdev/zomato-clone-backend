const Location = require('../models/LocationSchema')

exports.getLocation = (req, res) => {
    Location.find().then((result) => {
        res.status(200).json(result)
    })
}