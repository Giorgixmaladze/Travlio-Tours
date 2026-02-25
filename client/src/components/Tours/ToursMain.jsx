import TourList from "./TourList"

const ToursMain = () => {
    return (
        <div className="flex flex-col items-center py-12 px-4 bg-white min-h-screen">
            <div className="w-full max-w-5xl">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">All Tours</h1>
                <div className="w-16 h-1 bg-orange-500 rounded mb-2"></div>
                <TourList />
            </div>
        </div>
    )
}

export default ToursMain