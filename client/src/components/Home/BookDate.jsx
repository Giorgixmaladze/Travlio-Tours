import { Button } from "../ui/button"
import { ChevronDownIcon } from "lucide-react"
import { Calendar } from "../ui/calendar"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../ui/popover"

const BookDate = ({text}) => {
    return (
        <div className="flex items-center gap-3">
            <Popover>
                <PopoverTrigger asChild >
                    <Button
                        variant="outline"
                        id="date-picker"
                        className="w-40 justify-between font-normal">
                        {text}
                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                        mode="single"
                        captionLayout="dropdown"

                    />
                </PopoverContent>
            </Popover>
            <div className="flex flex-col gap-3">

                <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
            </div>

        </div>
    )
}


export default BookDate