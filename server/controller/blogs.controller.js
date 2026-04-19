const Blog = require("../model/blogs.model")



const postBlog = async (req, res, next) => {
    try {
        const blog = await Blog.create({
            user: req.user.id,
            ...req.body
        })
        res.status(200).json({
            success: true,
            data: blog
        })
    } catch (error) {
        next(error)
    }
}


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