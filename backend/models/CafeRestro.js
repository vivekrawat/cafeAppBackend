const mongoose = require('mongoose')

const CafeRestroSchema = new mongoose.Schema(
    {
        authId: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true,
            index: true
        },
        name: {
            type: String,
            required: true,
            minLength: 3
        },
        description: {
            type: String,
            required: true,
            minLength: 20
        },
        images: [
            {
            type: String,
            required: true,
            minLength: 3
            }
        ],
        city: {
            required: true,
            type: String,
            minLength: 3
        },
        pincode:{
            required: true,
            type: String
        },
        state: {
            required: true,
            enum: [ "Andhra-Pradesh",
            "Arunachal-Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal-Pradesh",
            "Jammu-and-Kashmir",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil-Nadu",
            "Telangana",
            "Tripura",
            "Uttarakhand",
            "Uttar-Pradesh",
            "West-Bengal",
            "Daman-and-Diu",
            "Delhi",
            "Lakshadweep",
            "Puducherry"]
        },
        address: {
            required: true,
            type: String,
            minLength: 5
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
CafeRestroSchema.index({ state: 1, city: 1 }, { unique: true })
module.exports = mongoose.model('CafeRestro', CafeRestroSchema)