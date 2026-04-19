const express = require("express")
const BlogRouter = express.Router()
const { postBlog, getAllBlogs, getBlogById,getBlogByUser } = require("../controller/blogs.controller")
const { protect } = require("../controller/auth.controller")

BlogRouter.post("/post-blog", protect, postBlog)
BlogRouter.get("/get-blogs", getAllBlogs)
BlogRouter.get("/get-blog/:id", getBlogById)
BlogRouter.get("/my-blogs", protect, getBlogByUser)
module.exports = BlogRouter;