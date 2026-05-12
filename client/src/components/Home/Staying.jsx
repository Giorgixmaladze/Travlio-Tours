import { useContext } from "react"
import { ToursContext } from "@/context/ToursContext"
import { Spinner } from "../ui/spinner"
import StayingCard from "./StayingCard"
import CarouselComp from "../CarouselComp"

const Staying = () => {
    const { popularTours, loading } = useContext(ToursContext)
    return (
        <div className="bg-[#f7f9fc] py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="flex flex-col items-center gap-2 mb-12">
                    <h3 className="font-medium text-gray-500 text-xl italic">Hand-Picked Destinations</h3>
                    <h2 className="text-gray-800 font-bold text-4xl">Best Staying Places</h2>
                    <div className="w-16 h-1 bg-orange-500 rounded mt-2" />
                </div>

                <div className="w-full px-8">
                    {loading ? (
                        <div className="flex justify-center">
                            <Spinner className="text-orange-500 size-10" />
                        </div>
                    ) : (
                        <CarouselComp iterable={popularTours} renderItem={(tour) => <StayingCard tour={tour} />} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Staying
