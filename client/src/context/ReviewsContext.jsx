import { createContext, useState, useEffect } from "react";
import fetchData from "@/utils/api";

export const ReviewsContext = createContext()

const ReviewsProvider = ({ children }) => {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(false)

    // controller for fetching all reviews
    const fetchReviews = async () => {
        try {
            setLoading(true)
            const data = await fetchData(`/api/reviews`)
            setReviews(data)
            setLoading(false)
        } catch (err) {
            console.error(err)
        }
    }


    useEffect(() => {
        fetchReviews()

    }, [])
    console.log(reviews)
    return (
        <ReviewsContext.Provider value={{ reviews, loading }}>
            {children}
        </ReviewsContext.Provider>
    )

}


export default ReviewsProvider
