import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ToursContext } from "../context/ToursContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
    MapPin, Clock, Users, Star, Check,
    Share2, Heart, ArrowLeft, CheckCircle2
} from "lucide-react";
import {
    FaCoffee, FaUtensils, FaWifi, FaTv, FaSwimmingPool,
    FaCar, FaSnowflake, FaSpa, FaDumbbell, FaConciergeBell
} from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"



const featureIconMap = {
    coffee: FaCoffee, breakfast: FaCoffee,
    food: FaUtensils, restaurant: FaUtensils,
    wifi: FaWifi, internet: FaWifi,
    tv: FaTv, television: FaTv,
    pool: FaSwimmingPool, swimming: FaSwimmingPool,
    parking: FaCar, car: FaCar,
    ac: FaSnowflake, "air conditioning": FaSnowflake,
    spa: FaSpa,
    gym: FaDumbbell, fitness: FaDumbbell,
    concierge: FaConciergeBell,
};

const getFeatureIcon = (feature) => {
    const key = feature?.toLowerCase();
    for (const [kw, Icon] of Object.entries(featureIconMap)) {
        if (key?.includes(kw)) return Icon;
    }
    return FaConciergeBell;
};

const TourDetails = () => {
    const { id } = useParams();
    const { getTourById } = useContext(ToursContext);
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);
  

    useEffect(() => {
        const fetchTour = async () => {
            const data = await getTourById(id);
            setTour(data);
            setLoading(false);
        };
        fetchTour();
    }, [id]);

    useGSAP(() => {
        if (!loading && tour) {
            const tl = gsap.timeline();
            tl.from(".tour-hero", { opacity: 0, scale: 1.1, duration: 1.2, ease: "power2.out" })
                .from(".tour-content", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
                .from(".tour-sidebar", { x: 30, opacity: 0, duration: 0.8 }, "-=0.6");
        }
    }, { dependencies: [loading, tour] });

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
            </div>
        );
    }

    if (!tour) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Tour not found</h1>
                <Link to="/tours" className="text-orange-500 hover:underline flex items-center gap-2">
                    <ArrowLeft size={18} /> Back to all tours
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />

            <main className="flex-1 overflow-hidden">
                {/* Hero Section */}
                <div className="relative h-[60vh] md:h-[75vh] w-full tour-hero">
                    <img
                        src={tour.image?.url}
                        alt={tour.image?.alt || tour.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-8 left-8 z-10">
                        <Link to="/tours" className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all flex items-center justify-center shadow-lg group">
                            <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="absolute bottom-12 left-0 right-0 px-4 md:px-12 text-white">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {tour.category}
                                </span>
                                <div className="flex items-center gap-1 text-orange-400">
                                    <Star size={16} fill="currentColor" />
                                    <span className="font-bold text-lg">{tour.rating || 4.8}</span>
                                    <span className="text-white/70 text-sm">({tour.reviewsCount || 120} reviews)</span>
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                                {tour.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-lg text-white/90">
                                <div className="flex items-center gap-2">
                                    <MapPin size={20} className="text-orange-500" />
                                    <span>{tour.city}, {tour.country}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={20} className="text-orange-500" />
                                    <span>{tour.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users size={20} className="text-orange-500" />
                                    <span>Group: 10-15 people</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-6xl mx-auto px-4 md:px-12 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 tour-content">
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience the Extraordinary</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                                    "One's destination is never a place, but a new way of seeing things." – Henry Miller
                                </p>
                                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                                    Immerse yourself in the breathtaking beauty of {tour.title}. This carefully curated journey takes you through the most iconic landmarks and hidden gems of {tour.city}.
                                    {"\n\n"}
                                    Whether you're exploring the vibrant local culture, tasting traditional cuisines, or simply soaking in the stunning views, this {tour.duration} adventure promises memories that will last a lifetime. Our expert guides ensure a safe, informative, and deeply engaging experience for all travelers.
                                </p>
                            </div>

                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">What this tour offers</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {tour.features && tour.features.map((feature, idx) => {
                                        const Icon = getFeatureIcon(feature);
                                        return (
                                            <div key={idx} className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all group">
                                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-500 mb-4 shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                                    <Icon size={24} />
                                                </div>
                                                <span className="text-sm font-semibold text-gray-700 text-center">{feature}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <CheckCircle2 className="text-green-500" /> Highlights
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Professional bilingual tour guide",
                                        "Entrance fees to all listed attractions",
                                        "Premium transportation with climate control",
                                        "Traditional local lunch and refreshments",
                                        "Small group sizes for personal attention"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700 text-lg">
                                            <Check className="text-orange-500 mt-1 shrink-0" size={20} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar / Booking */}
                        <div className="lg:col-span-1 tour-sidebar">
                            <div className="sticky top-24 bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <p className="text-sm text-gray-500 font-medium">From</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-black text-gray-900">${tour.price?.current}</span>
                                            {tour.price?.original > tour.price?.current && (
                                                <span className="text-xl text-gray-400 line-through">${tour.price?.original}</span>
                                            )}
                                        </div>
                                    </div>
                                    {tour.discountPercent > 0 && (
                                        <div className="bg-red-100 text-red-600 px-3 py-1 rounded-lg font-bold text-sm">
                                            {tour.discountPercent}% OFF
                                        </div>
                                    )}
                                </div>

                                {/* <div className="space-y-4 mb-8">
                                    <div className="relative">
                                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Date</label>
                                        <Popover >
                                            <PopoverTrigger asChild className="w-full flex items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-800 hover:bg-gray-100 transition-colors">

                                                <Button
                                                    variant="outline"
                                                    data-empty={!date}
                                                    className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground cursor-pointer w-full h-full"

                                                >
                                                    {date ? format(date, "PPP") : <span>Pick a date</span>}

                                                </Button>

                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    defaultMonth={date}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline" className="w-48 justify-between">
                                                Guests {total}
                                            </Button>
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent
                                            align="start"
                                            className="w-64 rounded-xl bg-gray-100 p-4 shadow-md flex flex-col gap-2"
                                        >
                                            <span className="flex items-center gap-2">
                                                <span>Adults</span>
                                                <button className="bg-gray-800 text-white py-1 px-3 rounded-md hover:bg-gray-900" onClick={() =>
                                                    adult > 1 && setAdult(adult - 1)}>-</button>
                                                <p>{adult}</p>
                                                <button className="bg-gray-800 text-white py-1 px-3 rounded-md hover:bg-gray-900" onClick={() =>
                                                    adult < 10 && setAdult(adult + 1)}>+</button>
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <span>Children</span>
                                                <button className="bg-gray-800 text-white py-1 px-3 rounded-md hover:bg-gray-900" onClick={() =>
                                                    children > 0 && setChildren(children - 1)}>-</button>
                                                <p>{children}</p>
                                                <button className="bg-gray-800 text-white py-1 px-3 rounded-md hover:bg-gray-900" onClick={() =>
                                                    children < 10 && setChildren(children + 1)}>+</button>
                                            </span>

                                            <button className="mt-4 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900">
                                                APPLY
                                            </button>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div> */}

                                <Link to={`/booking/${tour._id}`} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-orange-600/30 active:scale-95 block text-center mb-4">
                                    BOOK NOW
                                </Link>

                                <p className="text-center text-sm text-gray-500 mb-6 italic">Free cancellation up to 48 hours before start</p>

                                <div className="flex gap-4 pt-6 border-t border-gray-100">
                                    <button className="flex-1 flex items-center justify-center gap-2 text-sm font-bold text-gray-600 hover:bg-gray-50 py-2 rounded-lg transition-colors">
                                        <Share2 size={16} /> Share
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 text-sm font-bold text-gray-600 hover:bg-gray-50 py-2 rounded-lg transition-colors">
                                        <Heart size={16} /> Save
                                    </button>
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

export default TourDetails;
