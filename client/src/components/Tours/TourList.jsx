import { useContext } from "react"
import { Link } from "react-router-dom"
import { ToursContext } from "@/context/ToursContext"
import { 
    FaCoffee, FaUtensils, FaWifi, FaTv, FaSwimmingPool,
    FaCar, FaSnowflake, FaSpa, FaDumbbell, FaConciergeBell
} from "react-icons/fa";

const featureIconMap = {
    coffee: FaCoffee, breakfast: FaCoffee,
    food: FaUtensils, restaurant: FaUtensils,
    wifi: FaWifi, internet: FaWifi,
    tv: FaTv, television: FaTv,
    pool: FaSwimmingPool, swimming: FaSwimmingPool,
    parking: FaCar, car: FaCar,
    ac: FaSnowflake, "air conditioning": FaSnowflake,
    spa: FaSpa,
    gym: FaDumbbell, fitness: FaDumbbell,
    concierge: FaConciergeBell,
};

const getFeatureIcon = (feature) => {
    const key = feature?.toLowerCase();
    for (const [kw, Icon] of Object.entries(featureIconMap)) {
        if (key?.includes(kw)) return Icon;
    }
    return FaConciergeBell;
};

const defaultIcons = [FaCoffee, FaUtensils, FaWifi, FaTv, FaSwimmingPool];

const TourList = () => {

    const { tours,loading } = useContext(ToursContext)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 w-full">
            {loading ? (
                <div className="flex items-center justify-center w-full h-full">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
                </div>
            ) : tours.map((tour, idx) => {
                const icons =
                    tour.features && tour.features.length > 0
                        ? tour.features.slice(0, 4).map(getFeatureIcon)
                        : defaultIcons.slice(0, (idx % 3) + 2)

                return (
                    <Link
                        to={`/tours/${tour._id}`}
                        key={tour._id}
                        className="flex flex-col sm:flex-row bg-gray-50 rounded-sm shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300 cursor-pointer"
                    >
                        {/* Image */}
                        <div className="w-full sm:w-5/12 shrink-0 overflow-hidden h-48 sm:h-auto">
                            <img
                                src={tour.image?.url}
                                alt={tour.image?.alt || tour.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-between p-4 w-full sm:w-7/12">
                            {/* Title + Price */}
                            <div>
                                <div className="flex items-start justify-between gap-2 flex-wrap">
                                    <h3 className="text-lg font-semibold text-gray-700 flex-1 min-w-0">
                                        {tour.title}
                                    </h3>
                                    <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded whitespace-nowrap">
                                        ${tour.price?.current} / night
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 mt-3 leading-relaxed line-clamp-3">
                                    {tour.city && tour.country
                                        ? `Explore ${tour.title} in ${tour.city}, ${tour.country}. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore...`
                                        : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore..."}
                                </p>
                            </div>
                            {/* Icons */}
                            <div className="flex gap-2 mt-3 flex-wrap">
                                {icons.map((Icon, i) => (
                                    <span key={i} className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-sm text-sm hover:bg-orange-600 transition-colors duration-200">
                                        <Icon />
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default TourList