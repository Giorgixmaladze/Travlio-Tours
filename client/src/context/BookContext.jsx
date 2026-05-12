import { createContext, useState } from "react"

export const BookContext = createContext()

const BookProvider = ({children}) => {
    const [bookingData, setBookingData] = useState({})
    // controller for creating a new booking
    const createBooking = async (booking,id) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/book/create/${id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            credentials: "include",
            body:JSON.stringify(booking)
        })
        const data = await response.json()
        console.log(data)
        return data
    }


    // controller for getting bookings by single user
    const getUserBookings = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/book/my-bookings`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
        })
        const data = await response.json()
        return data
    }
    return (
        <BookContext.Provider value={{createBooking, getUserBookings, bookingData, setBookingData}}>
            {children}
        </BookContext.Provider>
    )
}


export default BookProvider