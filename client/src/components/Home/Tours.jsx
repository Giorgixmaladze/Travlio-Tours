import { Spinner } from "@/components/ui/spinner"
import { ToursContext } from "@/context/ToursContext"
import { useContext } from "react"

const Tours = () =>{
    const {tours,loading} = useContext(ToursContext)
    return(
        <div>
            {loading ? <Spinner className="text-orange-500 size-10"/> 
            :
            tours.map((tour) => (
                <TourCard key={tour._id} tour={tour}/>
            ))
             }
        </div>
    )
}

export default Tours
