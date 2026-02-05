import { useContext } from "react"
import { ToursContext } from "@/context/ToursContext"
import { Spinner } from "../ui/spinner"
import StayingCard from "./StayingCard"
import CarouselComp from "../CarouselComp"

const Staying = () => {

    const { popularTours, loading } = useContext(ToursContext)
    return (
        <div className="bg-[#f7f9fc] pt-20 flex flex-col items-center">
            <div className="flex flex-col items-center gap-5">
                <h3 className="font-medium  text-gray-600  text-2xl"><i>Best Staying Places</i></h3>
                <h2 className="text-gray-800 font-bold text-5xl"> Best Staying Places</h2>
            </div>
            <div className="w-10/12 flex justify-center pb-20 pt-15">
                {loading ? (
                    <Spinner className="text-orange-500 size-10" />
                ) : (
                    <CarouselComp iterable={popularTours} renderItem={(tour)=> <StayingCard tour={tour}/>}/>
                )}
            </div>
        </div>
    )
}

export default Staying
