import ToursFilter from "./ToursFilter"
import TourList from "./TourList"

const ToursMain = () => {
    return (
        <div className="flex flex-col items-center py-12 px-4 bg-gray-50/50 min-h-screen">
            <div className="w-full max-w-5xl">
                <div className="mb-8 text-center sm:text-left">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                        Explore <span className="text-orange-500">Premium</span> Tours
                    </h1>
                    <div className="w-20 h-1.5 bg-orange-500 rounded-full mb-4 mx-auto sm:mx-0"></div>
                    <p className="text-gray-500 text-lg max-w-2xl">
                        Handpicked experiences tailored for every traveler. Find your next destination.
                    </p>
                </div>
                
                <ToursFilter />
                
                <TourList />
            </div>
        </div>
    )
}

export default ToursMain