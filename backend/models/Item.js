const mongoose = require('mongoose')


const itemSchema = new mongoose.Schema(
  {
    cafeId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'CafeRestro',
      required: true
    },
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
        size: { type: String, required: true },
        cost: { type: Number, required: true }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema)
