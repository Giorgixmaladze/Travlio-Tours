const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    tourId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tour",
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    guestSize: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending"
    },
    paymentMethod: {
        type: String,
        default: "cash"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Book = mongoose.model("Book", bookSchema)
module.exports = Book