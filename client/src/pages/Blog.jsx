import Header from "../components/Header"
import Footer from "../components/Footer"
import { BlogCard } from "../components/Blog/BlogSections"
import AddBlogModal from "../components/Blog/AddBlogModal"
import { Link } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState,useEffect } from "react"
import { PenLine } from "lucide-react"
import { useContext } from "react"
import { BlogContext } from "../context/BlogContext"
const BlogHero = () => (
    <div
        className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center blog-hero"
        style={{
            backgroundImage:
                "url(https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1600&q=80)",
        }}
    >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-lg blog-hero-text">Our Blog</h1>
            <Link to="/" className="mt-3 text-sm md:text-base text-gray-300 uppercase tracking-widest blog-hero-text">
                Home &nbsp;/&nbsp;
                <span className="text-orange-400 font-semibold">Blog</span>
            </Link>
        </div>
    </div>
)

const Blog = () => {
    const containerRef = useRef(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { blogs, loading, error, addBlog,getAllBlogs } = useContext(BlogContext)

    useEffect(() => {
        getAllBlogs()
    }, [])

    useGSAP(() => {
        const tl = gsap.timeline()

        gsap.set(".blog-hero", { opacity: 0 })
        gsap.set(".blog-hero-text", { y: 20, opacity: 0 })
        gsap.set(".blog-header", { y: 20, opacity: 0 })
        gsap.set(".blog-card", { y: 30, opacity: 0 })

        tl.to(".blog-hero", {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        })
            .to(".blog-hero-text", {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.4")
            .to(".blog-header", {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.2")
            .to(".blog-card", {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.4")

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-gray-50">
                <BlogHero />
                <div className="max-w-6xl mx-auto px-4 py-16">
                    {/* Section header */}
                    <div className="flex flex-col items-center gap-2 mb-12 blog-header">
                        <h3 className="font-medium text-gray-500 text-xl italic">Latest Articles</h3>
                        <h2 className="text-gray-800 font-bold text-4xl">Travel Stories & Tips</h2>
                        <div className="w-16 h-1 bg-orange-500 rounded mt-2" />
                    </div>

                    {/* Blog cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogs.map((post) => (
                            <div key={post._id || post.id} className="blog-card">
                                <BlogCard post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />

            {/* Floating Write Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bottom-8 right-8 z-40 flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3.5 rounded-2xl shadow-xl shadow-orange-500/40 hover:shadow-orange-600/50 hover:-translate-y-1 transition-all duration-200"
            >
                <PenLine size={20} />
                Write a Post
            </button>

            {/* Add Blog Modal */}
            <AddBlogModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}

export default Blog
