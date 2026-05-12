import React from 'react'
import { Calendar as CalendarIcon, Users } from 'lucide-react'
import { format } from 'date-fns'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Calendar } from '../ui/calendar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu'

const BookingDetailsForm = ({ startDate, setStartDate, endDate, setEndDate, adult, setAdult, children, setChildren, total }) => {
    return (
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 animate-step">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                    <CalendarIcon size={20} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Trip Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase">Departure Date</label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className={`w-full h-14 justify-start text-left font-semibold border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-900 ${!startDate && "text-slate-400"}`}
                            >
                                <CalendarIcon className="mr-3 h-5 w-5 text-orange-600" />
                                {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={startDate}
                                onSelect={setStartDate}
                                defaultMonth={startDate}
                                disabled={date => date < new Date()}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase">Return Date</label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className={`w-full h-14 justify-start text-left font-semibold border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-900 ${!endDate && "text-slate-400"}`}
                            >
                                <CalendarIcon className="mr-3 h-5 w-5 text-orange-600" />
                                {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={endDate}
                                onSelect={setEndDate}
                                defaultMonth={endDate}
                                disabled={date => date < new Date()}
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase">Guests</label>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-full h-14 justify-start text-left font-semibold border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-900">
                                <Users className="mr-3 h-5 w-5 text-orange-600" />
                                {total} Guest{total !== 1 && 's'}
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            align="start"
                            className="w-[calc(100vw-2rem)] md:w-64 rounded-2xl bg-white p-4 shadow-xl border border-slate-100 flex flex-col gap-4"
                            sideOffset={8}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-slate-900">Adults</p>
                                    <p className="text-xs text-slate-500">Age 13+</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button type="button" className="w-8 h-8 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:border-orange-600 hover:text-orange-600 transition-colors" onClick={() => adult > 1 && setAdult(adult - 1)}>-</button>
                                    <span className="font-semibold text-slate-900 w-4 text-center">{adult}</span>
                                    <button type="button" className="w-8 h-8 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:border-orange-600 hover:text-orange-600 transition-colors" onClick={() => adult < 10 && setAdult(adult + 1)}>+</button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-slate-900">Children</p>
                                    <p className="text-xs text-slate-500">Ages 2-12</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button type="button" className="w-8 h-8 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:border-orange-600 hover:text-orange-600 transition-colors" onClick={() => children > 0 && setChildren(children - 1)}>-</button>
                                    <span className="font-semibold text-slate-900 w-4 text-center">{children}</span>
                                    <button type="button" className="w-8 h-8 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:border-orange-600 hover:text-orange-600 transition-colors" onClick={() => children < 10 && setChildren(children + 1)}>+</button>
                                </div>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </section>
    )
}

export default BookingDetailsForm
