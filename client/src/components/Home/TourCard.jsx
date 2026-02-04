import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";


const TourCard = ({ tour }) => {
    return (
        <div className="flex flex-col items-center gap-5 h-72 w-10/12 relative overflow-hidden rounded-md">
            <div
                className={`bg-cover bg-center h-10/12 w-full rounded-md hover:scale-105 transition-all duration-300`}
                style={{ backgroundImage: `url(${tour.image.url})` }}
            >
            </div>
            <div className="flex flex-col shadow-lg gap-3 pb-3 rounded-md pl-5 pr-5 w-11/12 pt-3 absolute bottom-1 bg-white">
                <div>
                    <span className="flex items-center justify-between">
                        <span className="flex gap-1 items-center">
                            {
                                [...Array(Math.round(tour.rating))].map((_, index) => (
                                    <FaStar key={index} className="text-yellow-500" />
                                ))
                            }
                            <span className="text-[14px] text-gray-500 pl-1">{tour.rating}</span>
                        </span>
                        <span className="font-bold bg-red-500 text-white px-2 py-1 rounded-full">{tour.badges[0]}</span>
                    </span>
                </div>
                <div>
                    <span className="flex justify-center gap-3">
                        <div className="flex-col">
                            <h3 className="font-medium text-gray-700 text-lg">{tour.title}</h3>
                            <span className="flex items-center gap-1">
                                <CiLocationOn />
                                <p className="text-gray-500 text-sm">{tour.address}</p>
                            </span>
                        </div>
                        <div>
                            <h5 className="line-through text-gray-500">${tour.price.original}</h5>
                            <h4 className="text-xl font-bold text-gray-800">${tour.price.current}</h4>
                        </div>


                    </span>

                </div>
            </div>
        </div>
    )
}

export default TourCard