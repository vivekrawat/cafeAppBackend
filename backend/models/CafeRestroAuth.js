const mongoose = require('mongoose')

const authSchema = new mongoose.Schema(
    {
        mobileNo: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: str => str.length === 10,
                message: 'please enter a valid mobile number'
            }
        },
        email: {
            type: String,
            unique: true,
            validate: {
                validator: function (v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: "Please enter a valid email"
            },
            required: [true, "Email required"]
        },
        password: {
            type: String
        }
    },
    { timestamps: true }
)
module.exports = mongoose.model("CafeRestroAuth", authSchema)
