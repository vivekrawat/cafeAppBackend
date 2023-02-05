const mongoose = require('mongoose')
const reservationSchema = mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    cafeId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'CafeRestro',
        required: true
    },
    people: { type: Number, required: true },
    date: { type: Date, required: true },
    time: {
        hours: {
            type: Number, required: true, min: 0, max: 23
        },
        minutes: {
            type: Number, required: true, enum: [0, 30]
        }
    },
}, {timestamps: true})
module.exports = mongoose.model('reservation', reservationSchema)