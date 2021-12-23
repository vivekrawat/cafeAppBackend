const mongoose  = require('mongoose')

const priceSchema = new mongoose.Schema({
    size: String,
    cost: Number
})

const itemSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        lowercase: true
    },
    image: {
        type: String,
    },
    price: {
        price1: priceSchema,
        price2: priceSchema,
        price3: priceSchema
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema)
