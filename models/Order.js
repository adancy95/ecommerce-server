const mongoose = require(mongoose)


const Schema = new mongoose.Schema;

const orderSchema = Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  phone: String,
  mailingAddressOne: String,
  mailingAddressTwo: String,
  city: String,
  state: String,
  country: String,
  zipCode: Number,
  sizeType: {
    type: String,
    enum: ["Kids", "Youth", "Women", "Men"]
  },
  sizes: String,
  colors: {
    type: String,
    enum: ["White", "Black", "Gray", "Red", "Blue", "Other"]
  },
  shirtFit: {
    type: String,
    enum: ["Fitted", "Loose Fit", "Round Neck", "V-Neck"]
  },
  designImage: String,
  designText: String,
  quantity: Number
},
  {
  timestamps: true
})

const Order = mongoose.model("Order", orderSchema);
module.exports = Order