const Menu = require('../models/MenuSchema')

exports.getMenu = (req, res) => {
    Menu.find().then(result => {
        res.status(200).json(result)
    })
}