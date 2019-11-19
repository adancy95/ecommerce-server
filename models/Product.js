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
  salePrice: Number,
  salePriceValidUntil: Date,
  regularPrice: {
    type: Number,
    required: true
  },
  instock: Boolean,
  quantity: Number,
  sold: Number,
  color: Array,
  size: Array,
  category:{type: Schema.Types.ObjectId, ref: 'Category'}

}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;