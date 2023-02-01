const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const mealTypeRouter = require('./routes/mealtype')
const restaurantRouter = require('./routes/restaurant')
const locationRouter = require('./routes/locations')
const menuRouter = require('./routes/menu')
const cors = require('cors')
const paymentRouter = require('./routes/payment')
require('dotenv').config()

// constants
const app = express()
const URI = process.env.DATABASE_URI
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(URI,()=>{app.listen(PORT,()=>console.log(`app listining on ${PORT}`))})



// Middlewares
app.use(bodyParser.json())
app.use(cors())
app.use('/mealtype',mealTypeRouter)
app.use('/location',locationRouter)
app.use('/restaurant',restaurantRouter)
app.use('/menu',menuRouter)
app.use('/payment',paymentRouter)