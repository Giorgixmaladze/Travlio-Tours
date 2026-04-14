import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle2, Copy, Download, Home, Calendar, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Confirmation = () => {
    
    useGSAP(() => {
        const tl = gsap.timeline();

        // Icon pop in
        tl.from(".success-icon", {
            scale: 0,
            rotation: -180,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.5)"
        });

        // Content fade up
        tl.from(".animate-item", {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=0.4");
        
        // Receipt slide in
        tl.from(".receipt-card", {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6");
    }, []);

    // Mock Booking Data for UI Purposes
    const mockBooking = {
        id: "TRV-9824-A7",
        tourName: "Alpine Adventure: Swiss Peaks",
        date: "Apr 17, 2026 - Apr 27, 2026",
        guests: "2 Adults, 1 Child",
        totalPaid: "$4,136.00",
        paymentMethod: "Visa ending in 4242"
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <Header />

            <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12 md:py-20">
                
                {/* Stepper (Completed State) */}
                <div className="flex items-center justify-center mb-16 overflow-x-auto pb-4">
                    {[
                        { label: "Traveler Details" },
                        { label: "Payment Info" },
                        { label: "Confirmation", active: true }
                    ].map((step, idx) => (
                        <div key={idx} className="flex items-center shrink-0">
                            <div className="flex flex-col items-center gap-2 text-emerald-600">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-emerald-600 bg-emerald-50">
                                    <CheckCircle2 size={18} />
                                </div>
                                <span className={`text-xs font-bold uppercase tracking-wider ${step.active ? 'text-emerald-600' : 'text-slate-400'}`}>
                                    {step.label}
                                </span>
                            </div>
                            {idx < 2 && (
                                <div className="mx-4 md:mx-8 h-[2px] w-8 md:w-16 bg-emerald-500" />
                            )}
                        </div>
                    ))}
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
                    
                    {/* Left Screen: Success Message */}
                    <div className="lg:col-span-3 space-y-8 text-center lg:text-left flex flex-col justify-center h-full">
                        <div className="flex justify-center lg:justify-start">
                            <div className="success-icon w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-xl shadow-emerald-500/20 border-4 border-white">
                                <CheckCircle2 size={48} strokeWidth={2.5} />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h1 className="animate-item text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                Booked Successfully! <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Get Ready for Adventure</span>
                            </h1>
                            <p className="animate-item text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
                                Your payment has been processed and your reservation is confirmed. We've sent a detailed receipt and itinerary to your email address.
                            </p>
                        </div>

                        <div className="animate-item pt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/">
                                <Button className="w-full sm:w-auto h-14 px-8 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
                                    <Home size={20} />
                                    Back to Home
                                </Button>
                            </Link>
                            <Link to="/profile">
                                <Button variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-2xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
                                    View My Bookings
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Screen: Interactive Receipt */}
                    <div className="lg:col-span-2">
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
                                    <h3 className="text-lg font-bold text-slate-900 leading-tight mb-4 group-hover:text-orange-600 transition-colors">{mockBooking.tourName}</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                                            <Calendar size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase">Dates</p>
                                            <p className="font-semibold text-slate-900">{mockBooking.date}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                            <Users size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-400 uppercase">Travelers</p>
                                            <p className="font-semibold text-slate-900">{mockBooking.guests}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6 mt-6 border-t border-dashed border-slate-200 space-y-4 relative">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-500">Payment Method</span>
                                        <span className="font-medium text-slate-900">{mockBooking.paymentMethod}</span>
                                    </div>
                                    <div className="flex justify-between items-center px-5 py-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <span className="font-bold text-slate-900 text-lg">Total Paid</span>
                                        <span className="font-black text-emerald-600 text-2xl">{mockBooking.totalPaid}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Confirmation;
