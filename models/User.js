const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema =  new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 32
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 32
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^.+@.+\..+$/
  },
  role: {
    type: Number,
    default: 0,
  },
  history: {
    type: Array,
    default: []

  },
  encryptedPassword: {
    type: String,
    required: true
  }
}, 
{
  timestamps: true
});

// "User" model --> "users" collection
const User = mongoose.model("User", userSchema);
module.exports = User;


// module.exports = mongoose.model("User", userSchema);;



