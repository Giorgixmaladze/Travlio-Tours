const Tour = require("../model/tours.model")

const getAllTours = async (req, res) =>{
    try {
     
        const tours = await Tour.find()
        res.status(200).json(tours)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


const getPopularTours = async (req, res) => {
    try {
        const tours = await Tour.find().limit(6)
        res.status(200).json(tours)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getTour = async (req, res,next) => {
    try {
        const tour = await Tour.findById(req.params.id)
        if (!tour) {
            return res.status(404).json({ message: "Tour not found" })
        }
        req.tour = tour
        next()
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllTours,
    getPopularTours,
    getTour
}
