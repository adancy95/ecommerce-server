const express = require("express")
const orderRouter = express.Router();
const Order = require('../models/Order')
const uploadMiddleWare = require('../configs/images/cloudinary');


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