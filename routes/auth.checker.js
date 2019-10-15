const express = require("express");
const authRouter = express.Router();
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth"
})