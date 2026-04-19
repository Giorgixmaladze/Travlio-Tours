import { Link } from 'react-router-dom'
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import { PenLine, BookOpen, Clock } from 'lucide-react'
import { useContext,useEffect } from 'react'
import { BlogContext } from '../../../context/BlogContext'


const BlogPostCard = ({ blog }) => {
    const { getBlogByUser } = useContext(BlogContext)
    useEffect(() => {
        getBlogByUser()
    }, [])
    const formattedDate = blog.createdAt
        ? new Date(blog.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
        : blog.date || ""

    return (
        <div className="group flex flex-col sm:flex-row gap-4 bg-gray-50 hover:bg-orange-50/40 border border-gray-100 hover:border-orange-200 rounded-2xl p-4 transition-all duration-300">
            {/* Thumbnail */}
            <div className="shrink-0 w-full sm:w-36 h-28 rounded-xl overflow-hidden bg-gray-200">
                {blog.image ? (
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                        <BookOpen size={28} className="text-white/70" />
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1 min-w-0">
                <div>
                    {blog.category && (
                        <span className="inline-block text-xs font-semibold text-orange-500 bg-orange-100 px-2.5 py-1 rounded-full mb-2">
                            {blog.category}
                        </span>
                    )}
                    <h3 className="font-bold text-gray-800 text-sm leading-snug line-clamp-2 group-hover:text-orange-600 transition-colors duration-200 mb-1">
                        {blog.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                        {blog.content}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                            <FaCalendarAlt className="text-orange-400" size={10} />
                            {formattedDate}
                        </span>
                       
                    </div>
                    <Link
                        to={`/blog/${blog._id || blog.id}`}
                        className="flex items-center gap-1 text-orange-500 hover:text-orange-600 text-xs font-semibold transition-colors"
                    >
                        Read <FaArrowRight size={10} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

const MyBlogsTab = ({ userData }) => {
    // Replace demoBlogs with real user blog data when ready
    const {blogs} = useContext(BlogContext)

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">My Blog Posts</h2>
                    <p className="text-sm text-gray-500 mt-0.5">{blogs.length} article{blogs.length !== 1 ? 's' : ''} published</p>
                </div>
                <Link
                    to="/blog"
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md shadow-orange-500/30 hover:shadow-orange-600/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                    <PenLine size={15} />
                    Write Post
                </Link>
            </div>

            {/* Blog list */}
            {blogs.length > 0 ? (
                <div className="flex flex-col gap-4">
                    {blogs.map(blog => (
                        <BlogPostCard key={blog._id || blog.id} blog={blog} />
                    ))}
                </div>
            ) : (
                /* Empty state */
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center mb-4">
                        <PenLine size={36} className="text-orange-400" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-700 mb-1">No posts yet</h3>
                    <p className="text-gray-400 text-sm max-w-xs mb-6">
                        You haven't published any blog posts. Share your travel stories with the world!
                    </p>
                    <Link
                        to="/blog"
                        className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/30"
                    >
                        <PenLine size={16} />
                        Write Your First Post
                    </Link>
                </div>
            )}
        </div>
    )
}

export default MyBlogsTab
