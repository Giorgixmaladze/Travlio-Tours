const mongoose = require("mongoose")

const tourSchema = new mongoose.Schema({
    title: String,
    city: String,
    country: String,
    address: String,
    rating: Number,
    reviewsCount: Number,
    discountPercent: Number,
    price: {
        original:Number,
        current:Number
    },
    duration: String,
    category: String,
    image: {
        alt:String,
        url:String

    },
    badges: {
        type: Array,

    },
    features: {
        type: Array,

    }
})

const Tour = mongoose.model("Tour", tourSchema)
module.exports = Tour