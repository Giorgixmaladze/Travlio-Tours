import { FaCheckCircle, FaPlane, FaMapMarkedAlt, FaHeadset, FaRegSmile } from "react-icons/fa"

const reasons = [
    { icon: FaPlane, text: "Best price guarantee on all packages" },
    { icon: FaMapMarkedAlt, text: "Expert local guides at every destination" },
    { icon: FaHeadset, text: "24/7 customer support throughout your trip" },
    { icon: FaRegSmile, text: "98% of our travelers come back for more" },
]

const Travel = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                {/* Image */}
                <div className="relative w-full md:w-1/2 shrink-0">
                    <img
                        src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80"
                        alt="Why travel with us"
                        className="w-full h-64 md:h-80 object-cover rounded-md shadow-lg"
                    />
                    <div className="absolute -bottom-5 -left-5 bg-orange-500 text-white rounded-md px-5 py-3 shadow-lg text-center hidden md:block">
                        <p className="text-2xl font-bold leading-none">1K+</p>
                        <p className="text-xs mt-1 uppercase tracking-wider">Happy Clients</p>
                    </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-2">Why Choose Us</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 leading-snug">
                        We Make Your Travel<br className="hidden md:block" /> Dreams Come True
                    </h2>
                    <div className="w-12 h-1 bg-orange-500 rounded mb-5" />
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        With over 15 years of experience crafting unforgettable journeys, we pair world-class destinations with personalized service.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {reasons.map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-start gap-3">
                                <span className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                    <Icon className="text-orange-500 text-sm" />
                                </span>
                                <p className="text-gray-600 text-sm leading-snug pt-1">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Travel