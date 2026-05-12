const express = require("express")
const router = express.Router()
const { createBooking, getUserBookings } = require("../controller/bookings.controller")
const { getTour } = require("../controller/tours.controller")
const { protect } = require("../controller/auth.controller")

router.post("/create/:id", protect, getTour, createBooking)
router.get("/my-bookings", protect, getUserBookings)
module.exports = router