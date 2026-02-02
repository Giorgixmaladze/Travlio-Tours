const express = require("express")
const toursRouter = express.Router()
const { getAllTours } = require("../controller/tours.controller")

toursRouter.get("/", getAllTours)

module.exports = toursRouter