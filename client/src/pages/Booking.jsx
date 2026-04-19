import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToursContext } from "../context/ToursContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
    CreditCard, User, ShieldCheck,
    AlertCircle, Lock, Calendar as CalendarIcon
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { format, addDays } from "date-fns";
import { BookContext } from "../context/BookContext"
import BookingDetailsForm from "../components/Booking/BookingDetailsForm";
import BookingSummaryCard from "../components/Booking/BookingSummaryCard";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getTourById } = useContext(ToursContext);
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [adult, setAdult] = useState(1);
    const {createBooking,bookingData,setBookingData} = useContext(BookContext)
    const [children, setChildren] = useState(0);
    const total = adult + children;


    const handleSubmit = async () => {
        // Build the data object once as a local variable.
        // setBookingData is async — it won't update bookingData in time for createBooking
        const data = {
            tourName: tour?.title, 
            startDate,
            endDate,
            totalPrice: tour?.price?.current * total,
            totalGuests: total,
            paymentMethod: "cash"
        }

        // Share with context so Confirmation page can read it
        setBookingData(data)

        try {
            // Pass `data` directly — not the stale `bookingData` state
            const res = await createBooking(data, id)
            if (res.success) {
                // Update bookingData with the real ID from the server
                setBookingData({ ...data, id: res.data?._id })
                navigate("/confirmation")
            } else {
                alert(res.message || "Booking failed")
            }
        } catch (error) {
            console.error("Booking error:", error)
            alert("An error occurred during booking")
        }
    }

    useEffect(() => {
        if (startDate && tour?.duration) {
            const days = parseInt(tour.duration);
            if (!isNaN(days) && days > 0) {
                setEndDate(addDays(startDate, days));
            }
        }
    }, [startDate, tour]);

    useEffect(() => {
        const fetchTour = async () => {
            let data = null;
            if (id) {
                data = await getTourById(id);
            }
            if (data && data.title && data.price && data.price.current) {
                setTour(data);
            } else {
                setMockTour();
            }
            setLoading(false);
        };

        const setMockTour = () => {
            setTour({
                title: "Alpine Adventure: Swiss Peaks",
                image: { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000" },
                price: { current: 1299, original: 1599 },
                rating: 4.9,
                reviewsCount: 84,
                city: "Zermatt",
                country: "Switzerland",
                duration: "7 Days",
                category: "Adventure"
            });
        };

        fetchTour();
    }, [id, getTourById]);

    useGSAP(() => {
        if (!loading) {
            gsap.from(".animate-step", {
                opacity: 0,
                y: 20,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out"
            });
            gsap.from(".animate-sidebar", {
                opacity: 0,
                x: 30,
                duration: 0.8,
                delay: 0.4,
                ease: "power2.out"
            });
        }
    }, { dependencies: [loading] });

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Header />

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 md:py-12">
                {/* Stepper */}
                <div className="flex items-center justify-center mb-12 overflow-x-auto pb-4">
                    {[
                        { icon: User, label: "Traveler Details", active: true },
                        { icon: CreditCard, label: "Payment Info", active: false },
                        { icon: ShieldCheck, label: "Confirmation", active: false }
                    ].map((step, idx) => (
                        <div key={idx} className="flex items-center shrink-0">
                            <div className={`flex flex-col items-center gap-2 ${step.active ? 'text-orange-600' : 'text-slate-400'}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step.active ? 'border-orange-600 bg-orange-50' : 'border-slate-200'}`}>
                                    <step.icon size={18} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider">{step.label}</span>
                            </div>
                            {idx < 2 && (
                                <div className="mx-4 md:mx-8 h-[2px] w-8 md:w-16 bg-slate-200" />
                            )}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <BookingDetailsForm 
                            startDate={startDate} 
                            setStartDate={setStartDate}
                            endDate={endDate}
                            setEndDate={setEndDate}
                            adult={adult}
                            setAdult={setAdult}
                            children={children}
                            setChildren={setChildren}
                            total={total}
                        />

                        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 animate-step">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                                        <CreditCard size={20} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">Payment Selection</h2>
                                </div>
                                <div className="flex gap-2">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-4 border-2 border-orange-600 bg-orange-50/30 rounded-2xl flex items-center justify-between cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-5 h-5 rounded-full border-2 border-orange-600 flex items-center justify-center">
                                            <div className="w-2.5 h-2.5 bg-orange-600 rounded-full" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900">Credit or Debit Card</p>
                                            <p className="text-sm text-slate-500">Safe and secure payment</p>
                                        </div>
                                    </div>
                                    <Lock size={18} className="text-slate-400" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <div className="md:col-span-2 space-y-2">
                                        <Label htmlFor="cardNum">Card Number</Label>
                                        <div className="relative">
                                            <Input id="cardNum" placeholder="0000 0000 0000 0000" className="rounded-xl border-slate-200 h-12 pl-4" />
                                            <CreditCard className="absolute right-4 top-3.5 text-slate-400" size={18} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="expiry">Expiry Date</Label>
                                        <Input id="expiry" placeholder="MM/YY" className="rounded-xl border-slate-200 h-12" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cvv">CVV</Label>
                                        <Input id="cvv" placeholder="123" className="rounded-xl border-slate-200 h-12" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100 animate-step">
                            <AlertCircle className="text-blue-500 shrink-0 mt-0.5" size={20} />
                            <p className="text-sm text-blue-700 leading-relaxed">
                                Your booking is protected by our <strong>100% Secure Checkout</strong>. Your data is encrypted and never stored on our servers.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6 animate-sidebar">
                            <BookingSummaryCard 
                                tour={tour} 
                                startDate={startDate} 
                                endDate={endDate} 
                                total={total} 
                                handleSubmit={handleSubmit} 
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Booking;
