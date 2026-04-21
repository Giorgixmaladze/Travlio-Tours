const Review = require("../model/reviews.model")

// controller for getting all reviews
const getAllReviews = async (req,res) =>{
    try{
        const reviews = await Review.find()
        res.json(reviews)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports = {
    getAllReviews
}