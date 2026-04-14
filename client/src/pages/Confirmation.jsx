import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle2, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmationTicket from '../components/Confirmation/ConfirmationTicket';

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
                        <ConfirmationTicket mockBooking={mockBooking} />
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Confirmation;
