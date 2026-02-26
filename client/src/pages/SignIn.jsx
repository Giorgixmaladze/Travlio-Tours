import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaGoogle, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.png";


const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sign In data:", formData);
        // TODO: Implement actual login logic here
    };

    return (
        <div className="flex flex-col min-h-screen">

            <div className="flex-1 flex items-center justify-center bg-gray-50 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80')] bg-cover bg-center overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>

                <div className="w-full max-w-4xl mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 animate-in fade-in zoom-in duration-500">

                    {/* Left Side - Image/Info */}
                    <div className="w-full md:w-5/12 bg-orange-500 p-10 text-white flex flex-col justify-between relative overflow-hidden hidden md:flex">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-orange-600/50 blur-3xl"></div>

                        <div className="relative z-10">
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
                        <div className="md:hidden flex justify-center mb-6">
                            <Link to="/">
                                <img src={logo} alt="Travlio" className="w-32" />
                            </Link>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Sign in to your account</h2>
                        <p className="text-gray-500 mb-8">Enter your details to access your dashboard.</p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <FaEnvelope />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <label className="block text-sm font-medium text-gray-700">Password</label>
                                    <a href="#" className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors">Forgot password?</a>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <FaLock />
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center">
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
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-xl transition-colors duration-300 active:scale-[0.98] shadow-lg shadow-orange-500/30"
                            >
                                Sign In
                            </button>
                        </form>

                        <div className="mt-8 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-200 after:mt-0.5 after:flex-1 after:border-t after:border-gray-200">
                            <p className="mx-4 text-sm text-gray-400 font-medium">Or continue with</p>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium text-sm">
                                <FaGoogle className="text-red-500" /> Google
                            </button>
                            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium text-sm">
                                <FaFacebookF className="text-blue-600" /> Facebook
                            </button>
                        </div>

                        <div className="mt-8 text-center md:hidden">
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
