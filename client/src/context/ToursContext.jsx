import { createContext, useEffect, useState } from "react"
import fetchData from "@/utils/api"

export const ToursContext = createContext()
const ToursProvider = ({children}) =>{

    const [tours,setTours] = useState([])
    const [loading,setLoading] = useState(false)
    const [popularTours,setPopularTours] = useState([])

    const fetchPopularTours = async () =>{
        setLoading(true)
        const data = await fetchData("http://localhost:3000/api/tours/popular")
        setPopularTours(data)
        setLoading(false)
    }

    const fetchTours = async () =>{
        setLoading(true)
        const data = await fetchData("http://localhost:3000/api/tours")
        setTours(data)
        setLoading(false)

    }

    useEffect(()=>{
        fetchTours()
        fetchPopularTours()
    },[])
    console.log(tours)

    return(
        <ToursContext.Provider value={{tours,loading,popularTours}}>
            {children}
        </ToursContext.Provider>
    )


}

export default ToursProvider