import { useContext, useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft } from "react-icons/fa"
import { Clock, Share2, BookOpen } from "lucide-react"
import { BlogContext } from "../context/BlogContext"

const BlogDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { blog, loading, error, fetchBlogById } = useContext(BlogContext)

    useEffect(() => {
        fetchBlogById(id)
    }, [id])

    const readingTime = blog?.content
        ? Math.max(1, Math.ceil(blog.content.split(" ").length / 200))
        : 1

    const formattedDate = blog?.createdAt
        ? new Date(blog.createdAt).toLocaleDateString("en-US", {
            year: "numeric", month: "long", day: "numeric"
        })
        : blog?.date || ""

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                        <p className="text-gray-500 font-medium">Loading article...</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    if (error || !blog) {
        return (
            <div className="flex flex-col min-h-screen">
                <Header />
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                        <p className="text-5xl mb-4">📄</p>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Post Not Found</h2>
                        <p className="text-gray-500 mb-6">{error || "This blog post doesn't exist."}</p>
                        <Link to="/blog" className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
                            Back to Blog
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            {/* Hero Image */}
            <div className="relative w-full h-72 md:h-[28rem] overflow-hidden">
                {blog.image ? (
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                {/* Back button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-4 py-2.5 rounded-full font-medium transition-all duration-200 text-sm"
                >
                    <FaArrowLeft size={12} />
                    Back
                </button>

                {/* Hero text overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 md:px-16">
                    <div className="max-w-4xl mx-auto">
                        {blog.category && (
                            <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                                {blog.category}
                            </span>
                        )}
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
                            {blog.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Article Container */}
            <main className="flex-1 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Author Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-5 mb-8 flex flex-wrap items-center gap-6 justify-between">
                        <div className="flex items-center gap-4">
                            {/* Avatar placeholder */}
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-lg shrink-0">
                                {blog.author?.charAt(0)?.toUpperCase() || "A"}
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">{blog.author}</p>
                                <p className="text-gray-500 text-sm">Author</p>
                            </div>
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <FaCalendarAlt className="text-orange-400" size={13} />
                                {formattedDate}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock size={14} className="text-orange-400" />
                                {readingTime} min read
                            </span>
                            {blog.category && (
                                <span className="flex items-center gap-1.5">
                                    <FaTag className="text-orange-400" size={13} />
                                    {blog.category}
                                </span>
                            )}
                        </div>

                        {/* Share */}
                        <button
                            onClick={() => navigator.clipboard.writeText(window.location.href)}
                            className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors text-sm font-medium"
                            title="Copy link"
                        >
                            <Share2 size={15} />
                            Share
                        </button>
                    </div>

                    {/* Article Content */}
                    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-10 md:px-12">
                        {/* Reading tag */}
                        <div className="flex items-center gap-2 text-orange-500 text-sm font-semibold mb-6">
                            <BookOpen size={16} />
                            Article
                        </div>

                        {/* Decorative divider */}
                        <div className="w-16 h-1 bg-orange-500 rounded mb-8" />

                        {/* Content */}
                        <div className="prose prose-gray max-w-none">
                            {blog.content?.split("\n").map((paragraph, i) =>
                                paragraph.trim() ? (
                                    <p key={i} className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
                                        {paragraph}
                                    </p>
                                ) : (
                                    <br key={i} />
                                )
                            )}
                        </div>
                    </article>

                    {/* Footer Navigation */}
                    <div className="mt-10 flex justify-between items-center">
                        <Link
                            to="/blog"
                            className="flex items-center gap-2 text-gray-600 hover:text-orange-500 font-semibold transition-colors text-sm group"
                        >
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            All Posts
                        </Link>

                        <div className="text-sm text-gray-400">
                            Published on {formattedDate}
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}

export default BlogDetails
