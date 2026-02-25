import { FaStar, FaQuoteLeft } from "react-icons/fa"

const ReviewCard = ({ review }) => {
    return (
        <div className="bg-white rounded-md shadow-md p-6 mx-2 flex flex-col gap-4 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            {/* Quote icon */}
            <FaQuoteLeft className="text-orange-400 text-2xl" />

            {/* Comment */}
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                {review.comment}
            </p>

            {/* Stars */}
            <span className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                        key={i}
                        className={i < review.rating ? "text-yellow-400" : "text-gray-200"}
                    />
                ))}
            </span>

            {/* Divider */}
            <div className="border-t border-gray-100 pt-4 flex items-center gap-4">
                <img
                    className="rounded-full w-12 h-12 object-cover border-2 border-orange-100"
                    src={review.image || `https://api.dicebear.com/7.x/initials/svg?seed=${review.reviewer?.name}`}
                    alt={review.reviewer?.name}
                />
                <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{review.reviewer?.name}</h4>
                    <p className="text-orange-500 text-xs">{review.reviewer?.position}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
