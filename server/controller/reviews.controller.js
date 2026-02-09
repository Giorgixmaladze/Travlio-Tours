const Review = require("../model/reviews.model")

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