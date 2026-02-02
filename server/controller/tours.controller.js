const Tour = require("../model/tours.model")

const getAllTours = async (req, res) =>{
    try {
     
        const tours = await Tour.find()
        res.status(200).json(tours)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {
    getAllTours
}
