const mongoose = require("mongoose")

const tourSchema =  new mongoose.Schema({
    title:String,
    city:String,
    country:String,
    address:String,
    rating:Number,
    reviewsCount:Number,
    discountPercent:Number,
    price:{
        type:mongoose.Types.ObjectId,
        ref:"Price"
    },
    duration:String,
    category:String,
    image:{
        type:mongoose.Types.ObjectId,
        ref:"Image"
    },
    badges:{
        type:Array,
        
    },
    features:{
        type:Array,
        
    }
})

const Tour = mongoose.model("Tour", tourSchema)
module.exports = Tour