import React from 'react'
import { MapPin, Star, Users, ArrowRight, CheckCircle2 } from 'lucide-react'
import { format } from 'date-fns'
import { Button } from '../ui/button'

const BookingSummaryCard = ({ tour, startDate, endDate, total, handleSubmit }) => {
    if (!tour) return null;

    return (
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={tour.image?.url}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-orange-600 uppercase">
                    {tour.category}
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">{tour.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                            <MapPin size={14} className="text-orange-500" />
                            <span>{tour.city}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Star size={14} fill="#f97316" className="text-orange-500" />
                            <span>{tour.rating} ({tour.reviewsCount})</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3 py-6 border-y border-slate-100">
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-slate-500">
                            <span>Date</span>
                        </div>
                        <span className="font-semibold text-slate-900">
                            {(format(startDate, "PPP").split(" ")[0].slice(0, 3)) + " " + (format(startDate, "PPP").split(" ")[1])} - {(format(endDate, "PPP").split(" ")[0].slice(0, 3)) + " " + (format(endDate, "PPP").split(" ")[1])}
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Duration</span>
                        <span className="font-semibold text-slate-900">{tour.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-slate-500">
                            <Users size={16} />
                            <span>Guests</span>
                        </div>
                        <span className="font-semibold text-slate-900">{total} Guests</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between text-slate-600 text-sm">
                        <span>Base Price</span>
                        <span>${tour.price?.current} x {total}</span>
                    </div>
                    <div className="flex justify-between text-slate-600 text-sm">
                        <span>Service Fee</span>
                        <span>$45.00</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                        <span className="text-lg font-bold text-slate-900">Total</span>
                        <span className="text-2xl font-black text-orange-600">${tour.price?.current * total + 45}</span>
                    </div>
                </div>

                <Button onClick={handleSubmit} className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 rounded-2xl text-lg font-bold shadow-lg shadow-orange-600/20 group">
                    COMPLETE BOOKING
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>

                <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg text-xs font-bold uppercase">
                        <CheckCircle2 size={14} />
                        Free Cancellation
                    </div>
                    <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest leading-loose">
                        Payment processed by secure-pay inc.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BookingSummaryCard
