import React from 'react'
import { Calendar, MapPin, ChevronRight } from 'lucide-react'
import { format } from 'date-fns'

const BookingsTab = ({ bookings, loadingBookings, navigate }) => {
    
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Calendar className="text-orange-500" />
                    My Bookings
                </h2>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {bookings.length} Total
                </span>
            </div>

            {loadingBookings ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                    <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin" />
                    <p className="text-gray-500 font-medium">Loading your adventures...</p>
                </div>
            ) : bookings.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                    {bookings.map((booking) => (
                        <div key={booking._id} className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 flex flex-col md:flex-row gap-6 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-orange-100">
                            <div className="relative w-full md:w-48 h-32 rounded-xl overflow-hidden shrink-0">
                                <img 
                                    src={booking.tourId?.image?.url || "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"} 
                                    alt={booking.tourId?.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-lg text-[10px] font-black text-orange-600 uppercase">
                                    {booking.tourId?.category || "Tours"}
                                </div>
                            </div>

                            <div className="flex-1 space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-y-2">
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors uppercase tracking-tight">{booking.tourId?.title}</h4>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                            <MapPin size={14} className="text-orange-500" />
                                            <span>{booking.tourId?.city}, {booking.tourId?.country}</span>
                                        </div>
                                    </div>
                                    <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase text-center self-start ${
                                        booking.status === 'confirmed' ? 'bg-emerald-50 text-emerald-600' : 
                                        booking.status === 'cancelled' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                                    }`}>
                                        {booking.status}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-gray-50">
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase mb-0.5">Start Date</p>
                                        <p className="text-xs font-bold text-gray-800">{format(new Date(booking.startDate), "MMM dd, yyyy")}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase mb-0.5">Duration</p>
                                        <p className="text-xs font-bold text-gray-800">{booking.tourId?.duration}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase mb-0.5">Guests</p>
                                        <p className="text-xs font-bold text-gray-800">{booking.guestSize} People</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase mb-0.5">Total Paid</p>
                                        <p className="text-sm font-black text-orange-600">${booking.totalPrice}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <p className="text-[10px] text-gray-400 italic">Booking ID: {booking._id.slice(-8).toUpperCase()}</p>
                                    <button className="text-xs font-bold text-slate-700 hover:text-orange-600 flex items-center gap-1 transition-colors">
                                        Manage Trip <ChevronRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center text-center py-16">
                    <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-orange-500/50">
                        <Calendar size={40} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No adventures yet</h3>
                    <p className="text-gray-500 mb-8 max-w-sm">When you book a tour, it will appear here so you can easily manage your journey.</p>
                    <button
                        onClick={() => navigate('/tours')}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-orange-600/20 transition-all hover:scale-105 active:scale-95"
                    >
                        Start Exploring
                    </button>
                </div>
            )}
        </div>
    )
}

export default BookingsTab
