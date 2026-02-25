import { useContext } from "react"
import { SearchContext } from "@/context/SearchContext"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent } from "../ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react"
import location from "../../assets/location.svg"
import guest from "../../assets/guest.svg"
import BookDate from "./BookDate"

const SearchForm = () => {
    const { childrenGuest, setChidrenGuest, youthGuest, setYouthGuest, adultGuest, setAdultGuests, allGuests } = useContext(SearchContext)

    return (
        <form className="flex flex-col md:flex-row items-stretch w-full rounded-[10px] overflow-hidden shadow-lg">
            {/* Destination */}
            <DropdownMenu>
                <DropdownMenuTrigger className="bg-white flex flex-row items-center justify-between gap-3 px-5 py-4 md:py-0 md:h-20 text-gray-600 border-b md:border-b-0 md:border-r border-gray-200 text-sm">
                    <span className="flex items-center gap-2">
                        <img src={location} alt="Location" className="w-4 h-4" />
                        All Destinations
                    </span>
                    <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>- All Destinations -</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Europe</DropdownMenuItem>
                    <DropdownMenuItem>Asia</DropdownMenuItem>
                    <DropdownMenuItem>Americas</DropdownMenuItem>
                    <DropdownMenuItem>Africa</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Date from */}
            <div className="bg-white flex items-center px-5 py-4 md:py-0 md:h-20 text-gray-600 border-b md:border-b-0 md:border-r border-gray-200">
                <BookDate text="Date From" />
            </div>

            {/* Date to */}
            <div className="bg-white flex items-center px-5 py-4 md:py-0 md:h-20 text-gray-600 border-b md:border-b-0 md:border-r border-gray-200">
                <BookDate text="Date To" />
            </div>

            {/* Guests */}
            <DropdownMenu>
                <DropdownMenuTrigger className="bg-white flex flex-row items-center justify-between gap-3 px-5 py-4 md:py-0 md:h-20 text-gray-600 border-b md:border-b-0 md:border-r border-gray-200 text-sm">
                    <span className="flex items-center gap-2">
                        <img src={guest} alt="Guests" className="w-4 h-4" />
                        Guests {allGuests}
                    </span>
                    <ChevronDownIcon className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                    {[
                        { label: "Adult", value: adultGuest, setter: setAdultGuests },
                        { label: "Youth", value: youthGuest, setter: setYouthGuest },
                        { label: "Children", value: childrenGuest, setter: setChidrenGuest },
                    ].map(({ label, value, setter }) => (
                        <DropdownMenuItem key={label} onSelect={(e) => e.preventDefault()} className="flex items-center justify-between text-gray-600">
                            <span>{value} {label}</span>
                            <div className="flex items-center gap-3">
                                <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setter((p) => p + 1) }} className="text-black text-lg font-bold">+</button>
                                <button type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setter((p) => Math.max(0, p - 1)) }} className="text-black text-lg font-bold">−</button>
                            </div>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Search */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 md:py-0 md:h-20 text-sm transition-colors duration-200">
                Search
            </button>
        </form>
    )
}

export default SearchForm