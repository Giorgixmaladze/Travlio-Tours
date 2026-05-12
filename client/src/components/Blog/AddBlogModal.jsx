import { useState, useContext } from 'react'
import { X, Image, Type, AlignLeft, Tag, User, Loader2 } from 'lucide-react'
import { BlogContext } from '../../context/BlogContext'
import { AuthContext } from '../../context/AuthContext'

const CATEGORIES = ['Adventure', 'Destinations', 'Food & Travel', 'Tips', 'Lifestyle', 'Culture', 'Budget Travel']

const AddBlogModal = ({ isOpen, onClose }) => {
    const { addBlog } = useContext(BlogContext)
    const { user } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image: null,
        category: '',
        author: user?.userName || ''
    })
    const [imagePreview, setImagePreview] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    if (!isOpen) return null

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            const file = e.target.files[0]
            setFormData({ ...formData, image: file })
            setImagePreview(file ? URL.createObjectURL(file) : null)
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        if (error) setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.title.trim() || !formData.content.trim()) {
            setError('Title and content are required.')
            return
        }
        if (!formData.image) {
            setError('Please select a cover image.')
            return
        }
        setLoading(true)
        try {
            // Build multipart/form-data so multer can read the file
            const data = new FormData()
            data.append('title', formData.title)
            data.append('content', formData.content)
            data.append('category', formData.category)
            data.append('author', formData.author)
            data.append('image', formData.image)

            const result = await addBlog(data)
            if (result?.success) {
                setFormData({ title: '', content: '', image: null, category: '', author: user?.userName || '' })
                setImagePreview(null)
                onClose()
            } else {
                setError(result?.message || 'Something went wrong.')
            }
        } catch (err) {
            setError('Failed to submit blog post.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">

                {/* Header */}
                <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-7 flex items-center justify-between shrink-0">
                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl translate-x-12 -translate-y-12 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -translate-x-8 translate-y-8 pointer-events-none" />

                    <div className="relative">
                        <h2 className="text-2xl font-bold text-white tracking-wide">Write a Blog Post</h2>
                        <p className="text-orange-100 text-sm mt-0.5">Share your travel story with the world</p>
                    </div>

                    <button
                        onClick={onClose}
                        className="relative bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-200 hover:scale-105"
                    >
                        <X size={20} className="text-white" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 px-8 py-7 flex flex-col gap-5">

                    {/* Title */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Type size={15} className="text-orange-500" />
                            Post Title <span className="text-orange-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="e.g. Hidden Gems in Southeast Asia"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400"
                        />
                    </div>

                    {/* Author + Category row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Author */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <User size={15} className="text-orange-500" />
                                Author
                            </label>
                            <input
                                type="text"
                                name="author"
                                value={formData.author}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400"
                            />
                        </div>

                        {/* Category */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <Tag size={15} className="text-orange-500" />
                                Category
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-200 text-gray-800"
                            >
                                <option value="">Select a category</option>
                                {CATEGORIES.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Image URL */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Image size={15} className="text-orange-500" />
                            Cover Image URL
                        </label>
                        <div className="flex flex-col gap-3">
                            <input
                                type="file"
                                name="image"
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400"
                            />
                            {imagePreview && (
                                <div className="w-full h-36 rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <AlignLeft size={15} className="text-orange-500" />
                            Content <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Write your travel story here..."
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-200 text-gray-800 placeholder:text-gray-400 resize-none"
                        />
                        <p className="text-xs text-gray-400 text-right">{formData.content.length} characters</p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
                            {error}
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 mt-auto">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-8 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-600/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Publishing...
                                </>
                            ) : (
                                'Publish Post'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBlogModal
