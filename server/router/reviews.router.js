const express = require("express")
const ReviewsRouter = express.Router()
const {getAllReviews} = require("../controller/reviews.controller")

ReviewsRouter.get("/",getAllReviews)

module.exports = ReviewsRouter