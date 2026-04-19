
import { createContext, useState, useEffect } from "react"

export const BlogContext = createContext()

const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [blog, setBlog] = useState(null);
    const getAllBlogs = async () => {
        try {
            setLoading(true)
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/get-blogs`)
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

    useEffect(() => {
        getAllBlogs()
    }, [])

    const fetchBlogById = async (id) => {
        try {
            setLoading(true)
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/get-blog/${id}`)
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
    const addBlog = async (blogData) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/post-blog`, {
                method: "POST",
                // Do NOT set Content-Type — the browser sets it automatically
                // with the correct multipart/form-data boundary for FormData
                credentials: "include",
                body: blogData  // blogData is already a FormData object
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

    const getBlogByUser = async () =>{
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/my-blogs`, {
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
