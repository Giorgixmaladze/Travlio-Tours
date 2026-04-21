const Blog = require("../model/blogs.model")


// controller for posting a blog
const postBlog = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Cover image is required." })
        }
        
    

        const blog = await Blog.create({
            user: req.user.id,
            ...req.body,
            image: `http://localhost:3000/${imagePath}`
        })
        res.status(200).json({
            success: true,
            data: blog
        })
    } catch (error) {
        next(error)
    }
}



// controller for getting all blogs
const getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json({
            success: true,
            data: blogs
        })
    } catch (error) {
        next(error)
    }
}


// controller for getting a single blog by id
const getBlogById = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id)
        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found' })
        }
        res.status(200).json({
            success: true,
            data: blog
        })
    } catch (error) {
        next(error)
    }
}
// controller for getting blogs by single user
const getBlogByUser = async (req,res, next ) =>{
    try {
        const blogs = await Blog.find({ user: req.user.id })
        res.status(200).json({
            success: true,
            data: blogs
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { postBlog, getAllBlogs, getBlogById,getBlogByUser }