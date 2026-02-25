import { FaCheckCircle } from "react-icons/fa"

const highlights = [
    "Handpicked destinations curated by local experts",
    "Small-group tours for an authentic experience",
    "24/7 support throughout your entire journey",
    "Flexible cancellation & transparent pricing",
]

const AboutMission = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                {/* Image */}
                <div className="relative w-full md:w-1/2 shrink-0">
                    <img
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80"
                        alt="Our mission"
                        className="w-full h-64 md:h-80 object-cover rounded-md shadow-lg"
                    />
                    <div className="absolute -bottom-5 -right-5 bg-orange-500 text-white rounded-md px-5 py-3 shadow-lg text-center hidden md:block">
                        <p className="text-2xl font-bold leading-none">15+</p>
                        <p className="text-xs mt-1 uppercase tracking-wider">Years Experience</p>
                    </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-2">Who We Are</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-snug">
                        We Create Unforgettable<br className="hidden md:block" /> Travel Experiences
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        At Travlio, we believe travel is more than just seeing new places — it's about connecting with cultures, making memories, and returning home with stories worth telling.
                    </p>
                    <ul className="space-y-3 mb-8">
                        {highlights.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                                <FaCheckCircle className="text-orange-500 mt-0.5 shrink-0 text-base" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <a
                        href="/tours"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-7 py-3 rounded transition-colors duration-200"
                    >
                        Explore Our Tours
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AboutMission
