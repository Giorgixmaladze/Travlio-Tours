import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import location from "../../assets/location.svg"
import { ChevronDownIcon } from "lucide-react"
import guest from "../../assets/guest.svg"
import BookDate from "./BookDate"
import { Input } from "../ui/input"



const SearchForm = () =>{
    return(
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
        
                                    <div className="bg-white h-20 flex items-center  text-gray-600 border-r border-r-gray-300">
                                        <DropdownMenu >
                                        <DropdownMenuTrigger className="bg-white h-20 flex flex-row items-center justify-center gap-7 pl-7 pr-7 text-gray-600 border-r border-r-gray-300">
                                            <span className="flex items-center gap-2">
                                                <img src={guest} alt="" />
                                                Guests
                                                0
                                            </span>
        
                                            
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                      
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                Adult
                                                <button>+</button>
                                                <button>-</button>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                Youth
                                                <button>+</button>
                                                <button>-</button>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                Children
                                                <button>+</button>
                                                <button>-</button>
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