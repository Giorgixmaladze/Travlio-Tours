import { useContext } from "react"
import { ToursContext } from "@/context/ToursContext"
`                       z`
const TourList = () => {
    const {tours} = useContext(ToursContext)


    return(
        <div className="grid grid-cols-2 gap-5 pt-10">
            {tours.map((tour)=>{
                return(
                    <div key={tour._id} className="flex bg-gray-100 gap-3 ">
                        <img src={tour.image.url} alt="" className="w-6/12"/>
                        <div className="flex flex-col gap-2 pt-5">
                            <h3 className="text-gray-600 text-2xl">{tour.title}</h3>
                            <p>{tour.city}</p>
                            <p>{tour.price.current}$</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default TourList