const mongoose = require('mongoose')

const CafeRestroSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 3
        },
        images: [
            {
            type: String,
            required: true,
            minLength: 3
            }
        ],
        address: {
            address1: {
                required: true,
                type: String,
                minLength: 5
            },
            pincode:{
                required: true,
                type: String
            },
            State: {
                required: true,
                type: String
            }
        },
        logo: {type: String},
        feed: [
            {
                type: String,
                minLength: 3
            }
        ],
        mobile: {
            required: true,
            type: String,
            validate: {
                validator: str => str.length === 10,
                message: 'please enter a valid mobile number'
            }
        },
        tables: {
            type: Number,
            required: true
        },
        perTableCapacity: {
            type: Number,
            required: true
        },
        openTime: {
            hours: {
                type: Number, required: true, min: 0, max: 23
            },
            minutes: {
                type: Number, required: true, enum: [0, 30]
            }
        },
        closeTime: {
            hours: {
                type: Number, required: true, min: 0, max: 23
            },
            minutes: {
                type: Number, required: true, enum: [0, 30]
            }
        },
        team: [
            {
                name: {type: String, required: true},
                position: {type: String, required: true},
                image: {type: String, required: true}
            }
        ]
    }
)

module.exports = mongoose.model('CafeRestro', CafeRestroSchema)