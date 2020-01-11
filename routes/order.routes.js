const express = require("express")
const orderRouter = express.Router();
const Order = require('../models/Order')
const uploadMiddleWare = require('../configs/images/cloudinary');


orderRouter.post("/api/orders/create", uploadMiddleWare.single('designImage'), (req, res, next) => {
  let newOrder = req.body;
  newOrder.designImage = 'No image was uploaded';
  if (req.file) {
    newOrder.designImage = req.file.url;
  }

  Order.create(newOrder)
    .then(order => {
      res.status(200).json({order})
    })
    .catch(err => next(err))
})

orderRouter.get("/api/orders", (req, res, next) => {
  Order.find()
    .then(orders => {
      if (orders === null) {
        res.status(400).json({ message: 'No orders exist. Add a Order' })
        return
      }
      res.status(200).json(orders)
    } )
    .catch(err => next(err))
})

orderRouter.get("/api/orders/:id", (req, res, next) => {
  Order.findById(req.params.id)
  .then(foundOrder=> {
    if (foundOrder === null) {
      res.status(400).json({ message: `order does not exist` });
      return
    }
    res.status(200).json({foundOrder})
  })
  .catch(err => next(err))
  
})