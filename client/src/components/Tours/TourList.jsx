import { useContext } from "react"
import { ToursContext } from "@/context/ToursContext"
import {
    FaCoffee,
    FaUtensils,
    FaWifi,
    FaTv,
    FaSwimmingPool,
    FaCar,
    FaSnowflake,
    FaSpa,
    FaDumbbell,
    FaConciergeBell,
} from "react-icons/fa"

const featureIconMap = {
    coffee: FaCoffee,
    breakfast: FaCoffee,
    food: FaUtensils,
    restaurant: FaUtensils,
    wifi: FaWifi,
    internet: FaWifi,
    tv: FaTv,
    television: FaTv,
    pool: FaSwimmingPool,
    swimming: FaSwimmingPool,
    parking: FaCar,
    car: FaCar,
    ac: FaSnowflake,
    "air conditioning": FaSnowflake,
    spa: FaSpa,
    gym: FaDumbbell,
    fitness: FaDumbbell,
    concierge: FaConciergeBell,
}

const getFeatureIcon = (feature) => {
    const key = feature?.toLowerCase()
    for (const [keyword, Icon] of Object.entries(featureIconMap)) {
        if (key?.includes(keyword)) return Icon
    }
    return FaConciergeBell
}

const defaultIcons = [FaCoffee, FaUtensils, FaWifi, FaTv]

const TourList = () => {
    const { tours } = useContext(ToursContext)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 w-full">
            {tours.map((tour, idx) => {
                const icons =
                    tour.features && tour.features.length > 0
                        ? tour.features.slice(0, 4).map(getFeatureIcon)
                        : defaultIcons.slice(0, (idx % 3) + 2)
                return (
                    <div
                        key={tour._id}
                        className="flex bg-gray-50 rounded-sm shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300"
                    >
                        {/* Image */}
                        <div className="w-5/12 shrink-0">
                            <img
                                src={tour.image?.url}
                                alt={tour.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-between p-4 w-7/12">
                            {/* Title + Price */}
                            <div className="flex items-start justify-between gap-2 flex-wrap">
                                <h3 className="text-xl font-semibold text-gray-700">
                                    {tour.title}
                                </h3>
                                <span className="text-sm text-gray-500 bg-gray-200 px-2 py-0.5 rounded whitespace-nowrap">
                                    ${tour.price?.current} / night
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-3">
                                {tour.desc ||
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore..."}
                            </p>

                            {/* Amenity Icons */}
                            <div className="flex gap-2 mt-3">
                                {icons.map((Icon, i) => (
                                    <span
                                        key={i}
                                        className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-sm text-sm"
                                    >
                                        <Icon />
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TourList