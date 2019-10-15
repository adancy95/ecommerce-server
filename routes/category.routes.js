const express = require("express");
const categoryRouter = express.Router();
const Category = require("../models/Category")


categoryRouter.post("/api/category/create", (req, res, next) => {
  if(name = ""){
    // send JSON file to the frontend if any of these fields are empty or password doesn't contain a number
    res.status(401).json({ message: "Category name is required" });
    return;
  }

  Category.findOne({ name: req.body.name })
    .then(foundCategory => {
      if (foundCategory !== null) {
        res.status(401).json({ message: `A category with the name ${req.body.name} already exist` });
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

// categoryRouter.get("/api/category/all", (req, res, next) => {

// })

// categoryRouter.get("/api/category/:id", (req, res, next) => {
  
// })

module.exports = categoryRouter