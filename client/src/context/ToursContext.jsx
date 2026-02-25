import { createContext, useEffect, useState } from "react"
import fetchData from "@/utils/api"

export const ToursContext = createContext()
const ToursProvider = ({ children }) => {

    const [tours, setTours] = useState([])
    const [loading, setLoading] = useState(false)
    const [popularTours, setPopularTours] = useState([])

    const fetchPopularTours = async () => {
        setLoading(true)
        const data = await fetchData(`${import.meta.env.VITE_API_URL}/api/tours/popular`)
        setPopularTours(data)
        setLoading(false)
    }

    const fetchTours = async () => {
        setLoading(true)
        const data = await fetchData(`${import.meta.env.VITE_API_URL}/api/tours`)
        setTours(data)
        setLoading(false)

    }

    useEffect(() => {
        fetchTours()
        fetchPopularTours()
    }, [])


    return (
        <ToursContext.Provider value={{ tours, loading, popularTours, tours }}>
            {children}
        </ToursContext.Provider>
    )


}

export default ToursProvider