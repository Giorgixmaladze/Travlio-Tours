import { FaStar } from "react-icons/fa"
import { CiLocationOn } from "react-icons/ci"

const TourCard = ({ tour }) => {
    return (
        <div className="flex flex-col items-center gap-5 h-72 w-full relative overflow-hidden rounded-md">
            <div
                className="bg-cover bg-center h-10/12 w-full rounded-md hover:scale-105 transition-all duration-300"
                style={{ backgroundImage: `url(${tour.image.url})` }}
            />
            <div className="flex flex-col shadow-lg gap-3 pb-3 rounded-md pl-5 pr-5 w-11/12 pt-3 absolute bottom-1 bg-white">
                <div>
                    <span className="flex items-center justify-between">
                        <span className="flex gap-1 items-center">
                            {[...Array(Math.round(tour.rating))].map((_, i) => (
                                <FaStar key={i} className="text-yellow-500 text-xs" />
                            ))}
                            <span className="text-[12px] text-gray-500 pl-1">{tour.rating}</span>
                        </span>
                        <span className="font-bold bg-red-500 text-white px-2 py-0.5 rounded-full text-xs">
                            {tour.badges[0]}
                        </span>
                    </span>
                </div>
                <div>
                    <span className="flex justify-between items-end gap-2">
                        <div className="flex-col min-w-0">
                            <h3 className="font-medium text-gray-700 text-base truncate">{tour.title}</h3>
                            <span className="flex items-center gap-1">
                                <CiLocationOn className="shrink-0" />
                                <p className="text-gray-500 text-xs truncate">{tour.address}</p>
                            </span>
                        </div>
                        <div className="shrink-0 text-right">
                            <h5 className="line-through text-gray-400 text-xs">${tour.price.original}</h5>
                            <h4 className="text-lg font-bold text-gray-800">${tour.price.current}</h4>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TourCard