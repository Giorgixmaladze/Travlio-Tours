import Header from "../components/Header"
import Footer from "../components/Footer"
import { posts, BlogCard } from "../components/Blog/BlogSections"

const BlogHero = () => (
    <div
        className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{
            backgroundImage:
                "url(https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1600&q=80)",
        }}
    >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-lg">Our Blog</h1>
            <p className="mt-3 text-sm md:text-base text-gray-300 uppercase tracking-widest">
                Home &nbsp;/&nbsp;
                <span className="text-orange-400 font-semibold">Blog</span>
            </p>
        </div>
    </div>
)

const Blog = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-gray-50">
                <BlogHero />
                <div className="max-w-6xl mx-auto px-4 py-16">
                    {/* Section header */}
                    <div className="flex flex-col items-center gap-2 mb-12">
                        <h3 className="font-medium text-gray-500 text-xl italic">Latest Articles</h3>
                        <h2 className="text-gray-800 font-bold text-4xl">Travel Stories & Tips</h2>
                        <div className="w-16 h-1 bg-orange-500 rounded mt-2" />
                    </div>

                    {/* Blog cards grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Blog
