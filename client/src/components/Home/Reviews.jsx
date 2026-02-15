import { useContext } from "react"
import { ReviewsContext } from "@/context/ReviewsContext"
import { Spinner } from "@/components/ui/spinner"
import ReviewCard from "./ReviewCard"
import CarouselComp from "../CarouselComp"
const Reviews = () => {
    const { reviews, loading } = useContext(ReviewsContext)
    return (
        <div className="flex flex-col items-center pt-25 gap-5 pb-20">
            <div className="flex flex-col items-center gap-5">
                <h3 className="font-medium  text-gray-600  text-2xl"><i>What Our Clients Saying</i></h3>
                <h2 className="text-gray-800 font-bold text-5xl">Our Traveller Says</h2>
            </div>
            <div className="w-10/12 flex justify-center pt-10">
                {loading ? (
                    <Spinner className="size-10 text-orange-500" />
                ) : (
                    <CarouselComp iterable={reviews} renderItem={(review) => <ReviewCard key={review.id} review={review} />} />
                )}
            </div>
        </div>
    )
}
export default Reviews