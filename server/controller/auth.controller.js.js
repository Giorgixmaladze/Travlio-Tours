const User = require("../model/user.model.js")

const createUser = async (req,res,next) =>{
    try{
        const user = await User.create(req.body)  
        res.status(200).json({message:"User created successfully",user})  
    }catch(error){
        next(error)
    }
} 


module.exports = {createUser}
