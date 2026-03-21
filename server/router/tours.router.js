const express = require("express")
const toursRouter = express.Router()
const { getAllTours, getPopularTours, getTour } = require("../controller/tours.controller")

toursRouter.get("/", getAllTours)
toursRouter.get("/popular", getPopularTours)
toursRouter.get("/:id", getTour)

module.exports = toursRouter