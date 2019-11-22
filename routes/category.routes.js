const express = require("express");
const categoryRouter = express.Router();
const Category = require("../models/Category")
const Product = require('../models/Product')


categoryRouter.post("/api/categories/create", (req, res, next) => {
  if(name = ""){
    // send JSON file to the frontend if any of these fields are empty or password doesn't contain a number
    res.status(401).json({ message: "Category name is required" });
    return;
  }

  Category.findOne({ name: req.body.name })
    .then(foundCategory => {
      if (foundCategory !== null) {
        res.status(400).json({ message: `A category with the name ${req.body.name} already exist` });
        return;
      }
      Category.create({ name: req.body.name })
      .then(category => {
        res.status(200).json({category})
      })
      .catch(err => next(err))
    })
  .catch(err => next(err))

  
})

categoryRouter.get("/api/categories", (req, res, next) => {
  Category.aggregate([
    {
        $lookup:
        {
            from: 'products',
            localField: "_id",
            foreignField: "category",
            as: 'products'
        }
    },
    {
        $project:
        {
            _id: 1,
            name: 1,
            number_of_products: { $size: "$products" }
        }
    }
]).then(categories => {
    res.status(200).json({categories})
  })
  .catch(err => next(err))
})

categoryRouter.get("/api/categories/:id", (req, res, next) => {
  Category.findById(req.params.id)
  .then(foundCategory=> {
    if (foundCategory === null) {
      res.status(400).json({ message: `Category does not exist` });
      return
    }
    res.status(200).json({foundCategory})
  })
  .catch(err => next(err))
  
})

categoryRouter.put('/api/categories/update/:id', (req, res, next) => {
  Category.findByIdAndUpdate(req.params.id, { name: req.body.name })
    .then(updatedCategory => {
      if (updatedCategory === null) {
        res.status(400).json({ message: `Category does not exist` });
        return
      }
      res.status(200).json([{ message: "The category name was updated" }, updatedCategory ])
    })
    .catch(err => next(err))
})

categoryRouter.delete('/api/categories/delete/:id', (req, res, next) => {
  Category.findByIdAndDelete(req.params.id)
    .then(deletedCategory => {
      res.status(200).json({message: "The category was successfuly deleted"})
    })
  .catch(err => next(err))
  
})

module.exports = categoryRouter