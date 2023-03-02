require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const OrderRouter = require('./route/Order')


const app = express()


// Connecting Mongoose

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('DB connection successfull');
    });


app.use(cors())


app.use(express.json())

app.use('/order', OrderRouter)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`)
})
