const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true
        },
        items: [
            {
                itemId: {
                    type: mongoose.SchemaTypes.ObjectId,
                    ref: 'Item',
                    required: true
                },
                type: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ]
    },
    { timestamps: true}
)

module.exports = mongoose.model('Wishlist', wishlistSchema)