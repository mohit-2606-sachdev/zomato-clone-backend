const Restaurant = require('../models/RestaurantSchema')

exports.getRestaurant = (req, res) => {
    Restaurant.find({city:req.params.id}).then(result => {
        res.status(200).json(result)
    })
}

exports.getRestaurantDetails = (req, res) => {
    Restaurant.find({name:req.params.name}).then(result => {
        res.status(200).json(result)
    })
}


exports.getPageByNumber = (req, res) => {
    let filter = {};

    if(req.body.body.city_id){
        filter.city= req.body.body.city_id
    }

    if (req.body.body.lcost && req.body.body.hcost) {
        console.log("inside")
        filter.cost = {$gt: req.body.body.lcost,$lt: req.body.body.hcost}
    }

    if (req.body.body.cuisine && req.body.body.cuisine.length>0){
        filter['Cuisine.name'] = {$in:req.body.body.cuisine}
    }

    Restaurant.find(filter).limit(2).skip(2 * (req.params.page - 1)).sort({ cost: req.body.body.sort })
        .then(result => {
            Restaurant.find(filter).count((err,count)=>{
                if(err){
                    console.log(err)
                }
                else{
                    res.status(200).json({
                        message: 'data fetched succesfully',
                        data: result,
                        totalRecords:count
                    })
                }
            })
           
        })
}