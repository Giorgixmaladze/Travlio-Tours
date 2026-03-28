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
    date: {
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
    }
    
})

module.exports = mongoose.model("Book", bookSchema)