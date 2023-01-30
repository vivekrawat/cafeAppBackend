const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
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
      password: {
          type: String,
          required: true
      },
      isAdmin: {
          type: Boolean,
          default: false
      }
  },
  {timestamps: true}
)
module.exports = mongoose.model("User", userSchema)