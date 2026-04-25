const express = require("express")
const BlogRouter = express.Router()
const { postBlog, getAllBlogs, getBlogById,getBlogByUser,deleteBlogByUSer } = require("../controller/blogs.controller")
const { protect } = require("../controller/auth.controller")
const upload = require("../utils/uploadImage")

BlogRouter.post("/post-blog", protect, upload.single("image"), postBlog)
BlogRouter.get("/get-blogs", getAllBlogs)
BlogRouter.get("/get-blog/:id", getBlogById)
BlogRouter.get("/my-blogs", protect, getBlogByUser)
BlogRouter.delete("/delete-blog/:id", protect, deleteBlogByUSer)
module.exports = BlogRouter;