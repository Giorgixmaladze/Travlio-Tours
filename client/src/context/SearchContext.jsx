import { UserStar } from "lucide-react";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext()

const SearchProvider = ({children}) =>{
    const [childrenGuest,setChidrenGuest] = useState(0)
    const [youthGuest,setYouthGuest] = useState(0)
    const [adultGuest,setAdultGuests] = useState(0)
    const [allGuests,setAllGuests] = useState(0)

    const sumGuests = () =>{
        setAllGuests(childrenGuest+youthGuest+adultGuest)
    }
    

    useEffect(()=>{
        sumGuests()
    },[childrenGuest,adultGuest,youthGuest])
    return(
        <SearchContext.Provider value={{childrenGuest,setChidrenGuest,youthGuest,setYouthGuest,adultGuest,setAdultGuests,sumGuests,allGuests}}>
            {children}
        </SearchContext.Provider>
    )
}


export default SearchProvider