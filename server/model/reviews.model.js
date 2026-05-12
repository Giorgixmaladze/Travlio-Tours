const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    tour_name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    reviewer:{
        name:{
            type:String,
            required:true
        },
        position:{
            type:String,
            required:true
        }
    },
    date:{
        type:Date,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})


const Review = mongoose.model("Review",reviewSchema)

module.exports = Review