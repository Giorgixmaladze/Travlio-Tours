import { createContext, useEffect, useState, useCallback } from "react"
import fetchData from "@/utils/api"

export const ToursContext = createContext()
const ToursProvider = ({ children }) => {

    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(false)
    const [popularTours, setPopularTours] = useState([])

    // controller for fetching popular tours
    const fetchPopularTours = async () => {
        setLoading(true)
        const data = await fetchData(`/api/tours/popular`)
        setPopularTours(data)
        setLoading(false)
    }
// controller for fetching all tours
    const fetchTours = async () => {
        setLoading(true)
        const data = await fetchData(`/api/tours`)
        setTours(data)
        setLoading(false)

    }

    useEffect(() => {
        fetchTours()
        fetchPopularTours()
    }, [])

// controller for fetching a single tour by id
    const getTourById = useCallback(async (id) => {
        setLoading(true)

        try {
            const data = await fetchData(`/api/tours/${id}`)
            return data
        } finally {
            setLoading(false)
        }
    }, [])

    return (
        <ToursContext.Provider value={{ tours, loading, popularTours, getTourById }}>
            {children}
        </ToursContext.Provider>
    )


}

export default ToursProvider