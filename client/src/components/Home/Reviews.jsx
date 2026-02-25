import { useContext } from "react"
import { ReviewsContext } from "@/context/ReviewsContext"
import { Spinner } from "@/components/ui/spinner"
import ReviewCard from "./ReviewCard"
import CarouselComp from "../CarouselComp"

const Reviews = () => {
    const { reviews, loading } = useContext(ReviewsContext)
    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section header */}
                <div className="flex flex-col items-center gap-2 mb-12">
                    <h3 className="font-medium text-gray-500 text-xl italic">What Our Clients Saying</h3>
                    <h2 className="text-gray-800 font-bold text-4xl">Our Traveller Says</h2>
                    <div className="w-16 h-1 bg-orange-500 rounded mt-2" />
                </div>

                <div className="w-full px-8">
                    {loading ? (
                        <div className="flex justify-center">
                            <Spinner className="size-10 text-orange-500" />
                        </div>
                    ) : (
                        <CarouselComp
                            iterable={reviews}
                            renderItem={(review) => <ReviewCard key={review.id} review={review} />}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Reviews