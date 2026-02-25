import { useContext } from "react"
import { ToursContext } from "@/context/ToursContext"
import { Spinner } from "@/components/ui/spinner"
import TourCard from "./TourCard"
import { Link } from "react-router-dom"

const Tours = () => {
    const { popularTours, loading } = useContext(ToursContext)
    return (
        <div className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="flex flex-col items-center gap-2 mb-12">
                    <h3 className="font-medium text-gray-500 text-xl italic">Popular Travel Packages</h3>
                    <h2 className="text-gray-800 font-bold text-4xl">Featured Tours</h2>
                    <div className="w-16 h-1 bg-orange-500 rounded mt-2" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {loading
                        ? <Spinner className="text-orange-500 size-10" />
                        : popularTours.map((tour) => (
                            <TourCard key={tour._id} tour={tour} />
                        ))
                    }
                </div>

                {/* View all link */}
                <div className="flex justify-center mt-12">
                    <Link
                        to="/tours"
                        className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-8 py-3 rounded transition-colors duration-200"
                    >
                        View All Tours →
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Tours
