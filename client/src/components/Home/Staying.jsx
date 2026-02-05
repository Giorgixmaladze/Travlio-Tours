import { useContext } from "react"
import { ToursContext } from "@/context/ToursContext"
import { Spinner } from "../ui/spinner"
import StayingCard from "./StayingCard"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel"

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
                    <Carousel className="w-full ">
                        <CarouselContent >
                            {popularTours.map((tour) => (
                                <CarouselItem key={tour._id} className="md:basis-1/2 lg:basis-1/3">
                                    <StayingCard tour={tour} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                )}
            </div>
        </div>
    )
}

export default Staying
