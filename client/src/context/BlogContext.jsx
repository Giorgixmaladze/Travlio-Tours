
import { createContext, useState, useEffect } from "react"

export const BlogContext = createContext()

const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [blog, setBlog] = useState(null);

    // controller for getting all blogs
    const getAllBlogs = async () => {
        try {
            setLoading(true)
            const res = await fetch(`/api/blogs/get-blogs`)
            const data = await res.json()
            if (data.success) {
                setBlogs(data.data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }


    // controller for getting a single blog by id
    const fetchBlogById = async (id) => {
        try {
            setLoading(true)
            const res = await fetch(`/api/blogs/get-blog/${id}`)
            const data = await res.json()
            if (data.success) {
                setBlog(data.data)
            } else {
                setError("Blog post not found.")
            }
        } catch (err) {
            setError("Failed to load blog post.")
        } finally {
            setLoading(false)
        }
    }


    // controller for adding a new blog
    const addBlog = async (blogData) => {
        try {
            const res = await fetch(`/api/blogs/post-blog`, {
                method: "POST",
                credentials: "include",
                body: blogData
            })
            const data = await res.json()
            if (data.success) {
                setBlogs([...blogs, data.data])
            }
            return { success: data.success };
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: error.message || "An error occurred during blog addition"
            };
        }
    }
// controller for getting blogs by single user
    const getBlogByUser = async () =>{
        try {
            const res = await fetch(`/api/blogs/my-blogs`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
            })
            const data = await res.json()
            if (data.success) {
                setBlogs(data.data)
            }
        } catch (error) {   
            console.log(error)
        }
    }



    return (
        <BlogContext.Provider value={{ blogs, loading, error, addBlog, getAllBlogs, fetchBlogById,blog,getBlogByUser }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogProvider
