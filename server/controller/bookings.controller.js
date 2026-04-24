const Booking = require("../model/book.model")
const Book = require("../model/book.model")
const Tour = require("../model/tours.model")

// controller for creating a booking
const createBooking = async (req,res,next) => {
    try {
        const id = req.params.id
        const {startDate,endDate,totalPrice,totalGuests,paymentMethod} = req.body
        const booking = new Booking({
            tourId:id,
            userId:req.user._id,
            startDate,
            endDate,
            totalPrice,
            guestSize:totalGuests,
            paymentMethod
        })
        await booking.save()
        res.status(201).json({ success: true, message: "Booking created successfully", data: booking })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


// controller for getting bookings by single user
const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user._id })
            .populate("tourId")
            .sort({ createdAt: -1 });
        
        res.status(200).json({
            success: true,
            data: bookings
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createBooking,
    getUserBookings
}