import React from 'react'
import { Copy, Download, Calendar, Users } from 'lucide-react'
import { Button } from '../ui/button'

const ConfirmationTicket = ({ mockBooking }) => {
    // Format Display Values
    const formattedId = mockBooking.id?.slice(-8).toUpperCase() || "TRV-XXXXXX"
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(mockBooking.totalPrice || 0)
    
    const dateRange = mockBooking.startDate && mockBooking.endDate 
        ? `${new Date(mockBooking.startDate).toLocaleDateString()} - ${new Date(mockBooking.endDate).toLocaleDateString()}`
        : "Dates not set"

    return (
        <div className="receipt-card bg-white rounded-3xl p-8 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
            {/* Decorative Top Edge */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-orange-600" />
            
            {/* Ticket cutouts */}
            <div className="absolute -left-3 top-[100px] w-6 h-6 bg-slate-50 rounded-full border border-slate-100"></div>
            <div className="absolute -right-3 top-[100px] w-6 h-6 bg-slate-50 rounded-full border border-slate-100"></div>

            <div className="flex justify-between items-start mb-8 text-slate-900 border-b border-dashed border-slate-200 pb-6 pt-4">
                <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Booking Ref</p>
                    <div 
                        className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-1.5 -ml-1.5 rounded-lg transition-colors" 
                        onClick={() => navigator.clipboard.writeText(mockBooking.id)}
                    >
                        <span className="text-xl font-black text-slate-800">{mockBooking.id}</span>
                        <Copy size={16} className="text-slate-400 hover:text-orange-600" />
                    </div>
                </div>
                <Button variant="ghost" size="icon" className="h-10 w-10 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-full">
                    <Download size={18} />
                </Button>
            </div>

            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-4 group-hover:text-orange-600 transition-colors">
                        {mockBooking.tourName || "Tour Name"}
                    </h3>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                            <Calendar size={18} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase">Dates</p>
                            <p className="font-semibold text-slate-900">{dateRange}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                            <Users size={18} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase">Travelers</p>
                            <p className="font-semibold text-slate-900">
                                {mockBooking.totalGuests || 0} Travelers
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-6 mt-6 border-t border-dashed border-slate-200 space-y-4 relative">
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Payment Method</span>
                        <span className="font-medium text-slate-900 capitalize">{mockBooking.paymentMethod}</span>
                    </div>
                    <div className="flex justify-between items-center px-5 py-4 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="font-bold text-slate-900 text-lg">Total Paid</span>
                        <span className="font-black text-emerald-600 text-2xl">{formattedPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationTicket
