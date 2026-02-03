const express = require("express")
const toursRouter = express.Router()
const { getAllTours,getPopularTours } = require("../controller/tours.controller")

toursRouter.get("/", getAllTours)
toursRouter.get("/popular", getPopularTours)

module.exports = toursRouter