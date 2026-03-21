import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SignUp = () => {
    const { signup } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        location: ""
    })

    const containerRef = useRef(null)

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch("https://ipapi.co/json/");
                const data = await response.json();
                if (data.city && data.country_name) {
                    setFormData(prev => ({
                        ...prev,
                        location: `${data.city}, ${data.country_name}`
                    }));
                }
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        };
        fetchLocation();
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Initial state before animation
        gsap.set(".sign-up-content", { y: 50, opacity: 0 });
        gsap.set(".sign-up-form-item", { x: -30, opacity: 0 });
        gsap.set(".sign-up-image", { scale: 0.9, opacity: 0 });

        // Animation sequence
        tl.to(".sign-up-content", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        })
            .to(".sign-up-image", {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.6")
            .to(".sign-up-form-item", {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.4");

    }, { scope: containerRef });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null);
        setLoading(true);
        const formDataObj = new FormData(e.target)
        const data = {
            name: formDataObj.get("name"),
            email: formDataObj.get("email"),
            password: formDataObj.get("password"),
            role: formDataObj.get("role"),
            location: formData.location
        }
        const result = await signup(data)
        setLoading(false);
        if (result && !result.success) {
            setError(result.message);
        } else if (result && result.success) {
            navigate("/signin");
        }
    }

    return (
        <div ref={containerRef} className="flex flex-col min-h-screen">
            <div className="flex-1 flex items-center justify-center bg-gray-50 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center overflow-hidden relative py-12">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

                <div className="sign-up-content w-full max-w-4xl mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse z-10 transition-all duration-500">

                    {/* Right Side / Image Area */}
                    <div className="w-full md:w-5/12 bg-gray-900 p-10 text-white flex flex-col justify-between relative overflow-hidden hidden md:flex">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0"></div>
                        <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-64 h-64 rounded-full bg-orange-500/30 blur-3xl"></div>

                        <div className="relative z-10 sign-up-image">
                            <Link to="/">
                                <img src={logo} alt="Travlio" className="w-32 brightness-0 invert opacity-90" />
                            </Link>
                            <h2 className="text-3xl font-bold mt-12 mb-4">Start Your Journey.</h2>
                            <p className="text-gray-300">Join Travlio to unlock exclusive deals, save your favorite tours, and explore the world with ease.</p>
                        </div>

                        <div className="relative z-10 text-sm font-medium text-gray-400 flex items-center gap-2">
                            <span>Already have an account?</span>
                            <Link to="/signin" className="text-white underline underline-offset-4 hover:text-orange-400 transition-colors">
                                Sign in
                            </Link>
                        </div>
                    </div>

                    {/* Form Container */}
                    <div className="w-full md:w-7/12 p-8 md:p-12 relative">
                        <div className="md:hidden flex justify-center mb-6 sign-up-image">
                            <Link to="/">
                                <img src={logo} alt="Travlio" className="w-32" />
                            </Link>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 sign-up-form-item">Create an account</h2>
                        <p className="text-gray-500 mb-6 sign-up-form-item">Fill in your details below to get started.</p>

                        {error && (
                            <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-6 text-sm flex items-center gap-2 sign-up-form-item border border-red-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="sign-up-form-item">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 z-10">
                                        <FaUser />
                                    </div>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="pl-10 pr-4 py-2.5 h-auto text-base"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div className="sign-up-form-item">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 z-10">
                                        <FaEnvelope />
                                    </div>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="pl-10 pr-4 py-2.5 h-auto text-base"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sign-up-form-item">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 z-10">
                                            <FaLock />
                                        </div>
                                        <Input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            className="pl-10 pr-4 py-2.5 h-auto text-base"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 z-10">
                                            <FaUser />
                                        </div>
                                        <Select
                                            onValueChange={(value) => setFormData({ ...formData, role: value })}
                                            value={formData.role}
                                            required name="role"
                                        >
                                            <SelectTrigger className="w-full pl-10 pr-4 py-2.5 h-auto text-base border-gray-200 rounded-xl bg-white shadow-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                                                <SelectValue placeholder="Select role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="user">User</SelectItem>
                                                <SelectItem value="admin">Admin</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center mt-2 mb-4 sign-up-form-item">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    required
                                    className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                                />
                                <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                                    I agree to the <a href="#" className="text-orange-500 hover:underline">Terms of Service</a> and <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gray-900 hover:bg-black text-white font-medium py-3 rounded-xl transition-colors duration-300 active:scale-[0.98] shadow-lg shadow-gray-900/30 mt-2 sign-up-form-item disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? "Creating Account..." : "Create Account"}
                            </button>
                        </form>

                        <div className="mt-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-200 after:mt-0.5 after:flex-1 after:border-t after:border-gray-200 sign-up-form-item">
                            <p className="mx-4 text-sm text-gray-400 font-medium">Or continue with</p>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4 sign-up-form-item">
                            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium text-sm">
                                <FaGoogle className="text-red-500" /> Google
                            </button>
                            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium text-sm">
                                <FaFacebookF className="text-blue-600" /> Facebook
                            </button>
                        </div>

                        <div className="mt-8 text-center md:hidden sign-up-form-item">
                            <p className="text-sm text-gray-600">
                                Already have an account?{' '}
                                <Link to="/signin" className="font-medium text-orange-500 hover:text-orange-600">
                                    Sign in
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
