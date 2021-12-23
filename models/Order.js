const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
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
        ],
        amount: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            default: 'pending'
        }
    }
)

module.exports = mongoose.model('Object', orderSchema)