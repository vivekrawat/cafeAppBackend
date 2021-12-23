const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const itemRoute = require('./routes/Item') 
const user = require('./routes/User')
const wishlist = require('./routes/Wishlist')
const order = require('./routes/Order')

const app = express()
const cors = require('cors')


dotenv.config()
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO_URL, (err) => {
    console.log(err)
})


app.use('/api/item', itemRoute)
app.use('/api/user', user)
app.use('/api/wishlist', wishlist)
app.use('/api/order', order)

app.listen(4000, ()=> {
})
