import TourList from "./TourList"

const ToursMain = () => {
    return(
        <div className="flex flex-col items-center pt-10">
            <div className="w-11/12 flex flex-col items-center">
                <h1 className="text-4xl font-bold text-gray-800">All Tours</h1>
                <TourList />
            </div>
        </div>
    )
}
export default ToursMain