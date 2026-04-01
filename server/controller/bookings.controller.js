const Booking = require("../model/book.model")

const createBooking = async (req,res,next) => {
    try {
        console.log(req.tour)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createBooking
}