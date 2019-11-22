const express = require("express")
const productRouter = express.Router();
const Product = require('../models/Product')
const uploadMiddleWare = require('../configs/images/cloudinary');
const moment = require('moment')


productRouter.post("/api/products/create", uploadMiddleWare.single('productImage'), (req, res, next) => {
  
 
  let newProduct = req.body;
  newProduct.productImage = '../public/images/placeholderShirt.jpg'
  if(req.file){
    newProduct.productImage = req.file.url
  }

  Product.create(newProduct)
    .then(product => {
      res.status(200).json({product})
    })
  .catch(err => next(err))
  
 
})

productRouter.get("/api/products", (req, res, next) => {
  Product.find()
    .then(products => {
      if (products === null) {
        res.status(400).json({ message: `No products exist. Add a product.` });
        return
      }
      let salePriceDate = moment(products.salePriceValidUntil).format('YYYY-MM-DD')
      res.status(200).json({products, salePriceDate})
    })
    .catch(err => next(err))
})

productRouter.get("/api/products/:id", (req, res, next) => {
  Product.findById(req.params.id)
  .then(foundProduct=> {
    if (foundProduct === null) {
      res.status(400).json({ message: `Product does not exist` });
      return
    }
    let salePriceDate = moment(foundProduct.salePriceValidUntil).format('YYYY-MM-DD')
    res.status(200).json({foundProduct, salePriceDate})
  })
  .catch(err => next(err))
  
})


productRouter.get("/api/product/categories", (req, res, next) => {
  Product.find().distinct("category", {})
    .then(foundCategories => {
    if (foundCategories === null) {
      res.status(400).json({ message: `Categories do not exist` });
      return
    }
    res.status(200).json({foundCategories})
  })
  .catch(err => next(err))
  
})

productRouter.put('/api/products/update/:id', (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id,  req.body.name )
    .then(updatedProduct => {
      if (updatedProduct === null) {
        res.status(400).json({ message: `Product does not exist` });
        return
      }
      res.status(200).json([{ message: "The Product name was updated" }, updatedProduct ])
    })
    .catch(err => next(err))
})

productRouter.delete('/api/products/delete/:id', (req, res, next) => {
  Product.findByIdAndDelete(req.params.id)
    .then(deletedProduct => {
      res.status(200).json({message: "The Product was successfuly deleted"})
    })
  .catch(err => next(err))
  
})

module.exports = productRouter