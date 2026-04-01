const express = require("express")
const router = express.Router()
const { createBooking } = require("../controller/bookings.controller")
const { getTour } = require("../controller/tours.controller")

router.post("/:id",getTour,createBooking)
module.exports = router