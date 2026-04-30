import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaGoogle, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Input } from "@/components/ui/input";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const SignIn = () => {
    const navigate = useNavigate()
    const { login, googleAuth } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const containerRef = useRef(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setLoading(true)
        const result = await login(formData)
        setLoading(false)
        if (result && !result.success) {
            setError(result.message);
        } else if (result && result.success) {
            navigate("/");
        }
    }

    useGSAP(() => {
        const tl = gsap.timeline();

        // Initial state before animation
        gsap.set(".sign-in-content", { y: 50, opacity: 0 });
        gsap.set(".sign-in-form-item", { x: 30, opacity: 0 });
        gsap.set(".sign-in-image", { scale: 0.9, opacity: 0 });

        // Animation sequence
        tl.to(".sign-in-content", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out"
        })
            .to(".sign-in-image", {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.6")
            .to(".sign-in-form-item", {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.4");

    }, { scope: containerRef });


    return (
        <div ref={containerRef} className="flex flex-col min-h-screen">

            <div className="flex-1 flex items-center justify-center bg-gray-50 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80')] bg-cover bg-center overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

                <div className="sign-in-content w-full max-w-4xl mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 transition-all duration-500">

                    {/* Left Side - Image/Info */}
                    <div className="w-full md:w-5/12 bg-orange-500 p-10 text-white flex flex-col justify-between relative overflow-hidden hidden md:flex">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-orange-600/50 blur-3xl"></div>

                        <div className="relative z-10 sign-in-image">
                            <Link to="/">
                                <img src={logo} alt="Travlio" className="w-32 brightness-0 invert opacity-90" />
                            </Link>
                            <h2 className="text-3xl font-bold mt-12 mb-4">Welcome Back!</h2>
                            <p className="text-orange-50">Log in to discover new destinations, manage your bookings, and plan your next adventure.</p>
                        </div>

                        <div className="relative z-10 text-sm font-medium text-orange-100 flex items-center gap-2">
                            <span>Don't have an account?</span>
                            <Link to="/signup" className="text-white underline underline-offset-4 hover:text-orange-200 transition-colors">
                                Sign up
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full md:w-7/12 p-8 md:p-12 relative">
                        <div className="md:hidden flex justify-center mb-6 sign-in-image">
                            <Link to="/">
                                <img src={logo} alt="Travlio" className="w-32" />
                            </Link>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 sign-in-form-item">Sign in to your account</h2>
                        <p className="text-gray-500 mb-6 sign-in-form-item">Enter your details to access your dashboard.</p>

                        {error && (
                            <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-6 text-sm flex items-center gap-2 sign-in-form-item border border-red-100">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {error}
                            </div>
                        )}

                        <form className="space-y-5" onSubmit={handleSubmit} onChange={handleChange}>
                            <div className="sign-in-form-item">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 z-10">
                                        <FaEnvelope />
                                    </div>
                                    <Input
                                        type="email"
                                        name="email"
                                        // value={formData.email}
                                        // onChange={handleChange}
                                        required
                                        className="pl-10 pr-4 py-3 h-auto text-base"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>

                            <div className="sign-in-form-item">
                                <div className="flex justify-between items-center mb-1">
                                    <label className="block text-sm font-medium text-gray-700">Password</label>
                                    <a href="#" className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors">Forgot password?</a>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 z-10">
                                        <FaLock />
                                    </div>
                                    <Input
                                        type="password"
                                        name="password"
                                        // value={formData.password}
                                        // onChange={handleChange}
                                        required
                                        className="pl-10 pr-4 py-3 h-auto text-base"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center sign-in-form-item">
                                <input
                                    id="remember_me"
                                    type="checkbox"
                                    className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-600">
                                    Remember me
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-xl transition-colors duration-300 active:scale-[0.98] shadow-lg shadow-orange-500/30 sign-in-form-item disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? "Signing In..." : "Sign In"}
                            </button>
                        </form>

                        <div className="mt-8 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-200 after:mt-0.5 after:flex-1 after:border-t after:border-gray-200 sign-in-form-item">
                            <p className="mx-4 text-sm text-gray-400 font-medium">Or continue with</p>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4 sign-in-form-item">
                            <button onClick={googleAuth} className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium text-sm">
                                <FaGoogle className="text-red-500" /> Google
                            </button>
                            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium text-sm">
                                <FaFacebookF className="text-blue-600" /> Facebook
                            </button>
                        </div>

                        <div className="mt-8 text-center md:hidden sign-in-form-item">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{' '}
                                <Link to="/signup" className="font-medium text-orange-500 hover:text-orange-600">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
