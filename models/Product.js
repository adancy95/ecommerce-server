const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = Schema({
  name: {
    type: String,
    required: true
  },
  productImage: String,
  description: {
    type: String,
    required: true
  },
  aggregateRating: {
    ratingValue: Number,
    reviewCount: Number
  },
  offers: {
    priceCurrency: {
      type: String,
      default: 'USD'
    },
    sale: {
      salePrice: Number,
      priceValidUntil: Date
    },
    regularPrice: {
      type: Number,
      required: true
    }
  },
  availability: {
    instock: Boolean,
    quantity: Number
  },
  color: String,
  size: String,
  category:{type: Schema.Types.ObjectId, ref: 'Category'}

}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;