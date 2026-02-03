import { Spinner } from "@/components/ui/spinner"
import { ToursContext } from "@/context/ToursContext"
import { useContext } from "react"
import TourCard from "./TourCard"
const Tours = () =>{
    const {popularTours,loading} = useContext(ToursContext)
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-20 justify-items-center pt-10">
            {loading ? <Spinner className="text-orange-500 size-10"/> 
            :
            popularTours.map((tour) => (
                <TourCard key={tour._id} tour={tour}/>
            ))
             }
        </div>
    )
}

export default Tours
