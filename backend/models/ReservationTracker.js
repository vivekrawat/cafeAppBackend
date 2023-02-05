const mongoose = require('mongoose')

const ReservationTrackerSchema = new mongoose.Schema({
    cafeId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'CafeRestro',
        required: true
    },
    reservations: [
        {
            date: Date,
            list: [{
                time: {
                    hours: {
                        type: Number, required: true, min: 0, max: 23
                    },
                    minutes: {
                        type: Number, required: true, enum: [0, 30]
                    }
                }, isAvailable: Boolean
            }]
        }
    ]
})

module.exports = mongoose.model('reservation', ReservationTrackerSchema)