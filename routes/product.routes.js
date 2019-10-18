const express = require("express")
const productRouter = express.Router();
const Product = require('../models/Product')


productRouter.post("/api/products/create", (req, res, next) => {

  Product.create(req.body)
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
      res.status(200).json({products})
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
    res.status(200).json({foundProduct})
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