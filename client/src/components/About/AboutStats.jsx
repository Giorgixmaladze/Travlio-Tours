import { FaMapMarkedAlt, FaUsers, FaStar, FaGlobeAmericas } from "react-icons/fa"

const stats = [
    { icon: FaMapMarkedAlt, value: "1,200+", label: "Local Tours" },
    { icon: FaUsers, value: "98%", label: "Happy Travelers" },
    { icon: FaStar, value: "4.9", label: "Average Rating" },
    { icon: FaGlobeAmericas, value: "65", label: "Countries Covered" },
]

const AboutStats = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map(({ icon: Icon, value, label }) => (
                    <div
                        key={label}
                        className="flex flex-col items-center gap-2 text-center"
                    >
                        <span className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-md">
                            <Icon className="text-white text-2xl" />
                        </span>
                        <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
                        <p className="text-gray-500 text-sm">{label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutStats
