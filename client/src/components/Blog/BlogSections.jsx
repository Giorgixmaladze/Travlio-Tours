import { FaCalendarAlt, FaUser, FaTag, FaArrowRight,FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { BlogContext } from "../../context/BlogContext"


const BlogCard = ({ post }) => {
    const {deleteBlogByUser} = useContext(BlogContext)
    return(
    <div className="bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow duration-300 flex flex-col">
        {/* Image */}
        <div className="overflow-hidden h-52 shrink-0">
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3 flex-1">
            {/* Category */}
            <span className="inline-block bg-orange-100 text-orange-500 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full self-start">
                {post.category}
            </span>

            {/* Title */}
            <h3 className="font-bold text-gray-800 text-base leading-snug line-clamp-2 group-hover:text-orange-500 transition-colors duration-200">
                {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1">
                {post.excerpt || post.content}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-gray-400 border-t border-gray-100 pt-3 mt-auto">
                <span className="flex items-center gap-1">
                    <FaUser className="text-orange-400" /> {post.author}
                </span>
                <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-orange-400" /> {post.date || (post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "No Date")}
                </span>
            </div>

            {/* Read more */}
            <Link
                to={`/blog/${post._id || post.id}`}
                className="flex items-center gap-1 text-orange-500 hover:text-orange-600 text-xs font-semibold transition-colors duration-200 mt-1"
            >
                Read More <FaArrowRight className="text-xs" />
            </Link>
            <button onClick={() => deleteBlogByUser(post._id)} className="flex items-center gap-1 text-red-500 hover:text-red-600 text-xs font-semibold transition-colors duration-200 mt-1"><FaTrash className="text-xs" />Delete</button>
        </div>
    </div>
    )
}

export {BlogCard }
