import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import location from "../../assets/location.svg"
import { ChevronDownIcon } from "lucide-react"
import guest from "../../assets/guest.svg"
import BookDate from "./BookDate"
import { Input } from "../ui/input"
import SearchForm from "./SearchForm"



const HomeMain = () => {
    return (
        <div className="bg-[url('/beach.jpg')] h-[105vh] bg-center bg-cover bg-no-repeat">
            <div className="w-full h-full bg-[rgba(0,0,0,0.45)] flex justify-center">
                <div className="w-11/12 h-full">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-10">
                        <h1 className="text-6xl font-medium text-white">Ready to start your exciting journey.</h1>
                        <p className="text-white text-[20px]">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium</p>
                       
                        <SearchForm />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeMain