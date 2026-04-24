const Blog = require("../model/blogs.model")
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


// controller for posting a blog
const postBlog = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Cover image is required." })
        }
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
            folder: "blogs",
            resource_type: "image",
        });

        const blog = await Blog.create({
            user: req.user.id,
            ...req.body,
            image: uploadResult.secure_url
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
    

const deleteBlogByUSer = async (req,res, next ) =>{
    try {
        
        const blog = await Blog.findById(req.params.id)
        if (!blog) {
            return res.status(404).json({ success: false, message: 'Blog not found' })
        }
        if (blog.user.toString() !== req.user.id && req.user.role !== "admin") {
            return res.status(403).json({ success: false, message: 'You are not authorized to delete this blog' })
        }
        await blog.deleteOne()
        res.status(200).json({
            success: true,
            message: "Blog deleted successfully"
        })
    } catch (error) {
        next(error)
    }   
}

module.exports = { postBlog, getAllBlogs, getBlogById,getBlogByUser,deleteBlogByUSer }