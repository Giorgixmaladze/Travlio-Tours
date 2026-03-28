import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ToursContext } from "../context/ToursContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
    ChevronRight, CreditCard, User, ShieldCheck, 
    Calendar, Users, MapPin, Star, AlertCircle,
    Lock, CheckCircle2, ArrowRight
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const Booking = () => {
    const { id } = useParams();
    const { getTourById } = useContext(ToursContext);
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTour = async () => {
            let data = null;
            if (id) {
                data = await getTourById(id);
            }

            // Check if data is valid and has essential fields
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Forms */}
                    <div className="lg:col-span-2 space-y-8 animate-step">
                        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                                    <User size={20} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Primary Traveler</h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" placeholder="John" className="rounded-xl border-slate-200 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" placeholder="Doe" className="rounded-xl border-slate-200 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="rounded-xl border-slate-200 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <Input id="phone" placeholder="+1 (555) 000-0000" className="rounded-xl border-slate-200 h-12" />
                                </div>
                            </div>
                        </section>

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

                    {/* Right Column: Summary */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6 animate-sidebar">
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
                                                <Calendar size={16} />
                                                <span>Date</span>
                                            </div>
                                            <span className="font-semibold text-slate-900">Oct 12 - Oct 19, 2026</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2 text-slate-500">
                                                <Users size={16} />
                                                <span>Guests</span>
                                            </div>
                                            <span className="font-semibold text-slate-900">2 Adults</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between text-slate-600 text-sm">
                                            <span>Base Price</span>
                                            <span>${tour.price?.current} x 2</span>
                                        </div>
                                        <div className="flex justify-between text-slate-600 text-sm">
                                            <span>Service Fee</span>
                                            <span>$45.00</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                                            <span className="text-lg font-bold text-slate-900">Total</span>
                                            <span className="text-2xl font-black text-orange-600">${tour.price?.current * 2 + 45}</span>
                                        </div>
                                    </div>

                                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 rounded-2xl text-lg font-bold shadow-lg shadow-orange-600/20 group">
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
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Booking;
