const mongoose  = require('mongoose')

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
    price: [
      {
        size: { type: String, required: true},
        cost: { type: Number, required: true}
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema)
