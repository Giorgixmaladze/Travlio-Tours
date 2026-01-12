import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import location from "../../assets/location.svg"
import { ChevronDownIcon } from "lucide-react"
import guest from "../../assets/guest.svg"
import BookDate from "./BookDate"
import { Input } from "../ui/input"
import { useContext } from "react"
import { SearchContext } from "@/context/SearchContext"



const SearchForm = () => {

    const { childrenGuest, setChidrenGuest, youthGuest, setYouthGuest, adultGuest, setAdultGuests, sumGuests, allGuests } = useContext(SearchContext)
    return (
        <form action="" className="flex items-center">
            <DropdownMenu >
                <DropdownMenuTrigger className="bg-white h-20 flex flex-row items-center justify-center gap-7 pl-7 pr-7 text-gray-600 border-r border-r-gray-300 rounded-tl-[10px] rounded-bl-[10px] ">
                    <span className="flex items-center gap-2">
                        <img src={location} alt="Location logo" />
                        All Destinations
                    </span>

                    <ChevronDownIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>- All Destinations -</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="bg-white h-20 flex items-center pl-7 pr-7 text-gray-600  border-r border-r-gray-300">
                <BookDate text="Select Date From" />
            </div>
            <div className="bg-white h-20 flex items-center pl-7 pr-7 text-gray-600 border-r border-r-gray-300">
                <BookDate text="Select Date To" />
            </div >

            <div className="bg-white h-20 flex items-center  text-gray-600 border-r border-r-gray-300 ">
                <DropdownMenu className="text-gray-600 w-full ">
                    <DropdownMenuTrigger className="bg-white h-20 flex flex-row items-center justify-center gap-7 pl-7 pr-7 text-gray-600 border-r border-r-gray-300 w-full">
                        <span className="flex items-center gap-2">
                            <img src={guest} alt="" />
                            Guests {allGuests}
                        </span>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-45">


                        <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                            className="text-gray-600 text-[18px] flex items-center justify-between"
                        >
                            <span className="flex gap-2">
                                <span>{adultGuest}</span>
                                <span>Adult</span>
                            </span>


                            <div className="flex items-center gap-5">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setAdultGuests((prev) => prev + 1)
                                    }}
                                    className="text-black text-[20px]"
                                >
                                    +
                                </button>



                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setAdultGuests((prev) => Math.max(0, prev - 1))
                                    }}
                                     className="text-black text-[20px]"
                                >
                                    -
                                </button>
                            </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-gray-600 text-[18px] flex items-center justify-between" >
                            

                            <span className="flex gap-2">
                                <span>{youthGuest}</span>
                                <span>Youth</span>

                            </span>
                            
                            <div className="flex items-center gap-5">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setYouthGuest((prev) => prev + 1)
                                    }}
                                    className="text-black text-[20px]"
                                >
                                    +
                                </button>



                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setYouthGuest((prev) => Math.max(0, prev - 1))
                                    }}
                                    className="text-black text-[20px]"
                                >
                                    -
                                </button>
                            </div>
                        </DropdownMenuItem>

                        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-gray-600 text-[18px] flex items-center justify-between" >
                            

                            <span className="flex gap-2">
                                <span>{childrenGuest}</span>
                                <span>Children</span>
                            </span>
                        
                            <div className="flex items-center gap-5">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setChidrenGuest((prev) => prev + 1)
                                    }}
                                    className="text-black text-[20px]"
                                >
                                    +
                                </button>



                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setChidrenGuest((prev) => Math.max(0, prev - 1))
                                    }}
                                    className="text-black text-[20px]"
                                >
                                    -
                                </button>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <button className="h-full pl-10 pr-10 bg-orange-600 rounded-tr-[10px] rounded-br-[10px] text-xl text-white">
                Search
            </button>

        </form>
    )
}


export default SearchForm