import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.png";


const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log("Sign Up data:", formData);
        // TODO: Implement actual registration logic here
    };

    return (
        <div className="flex flex-col min-h-screen">
    
            <div className="flex-1 flex items-center justify-center bg-gray-50 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center overflow-hidden relative py-12">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

                <div className="w-full max-w-4xl mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse z-10 animate-in fade-in zoom-in duration-500">

                    {/* Right Side (visually right, flex-row-reverse makes it first in code for mobile ordering) / Left Side physically */}
                    <div className="w-full md:w-5/12 bg-gray-900 p-10 text-white flex flex-col justify-between relative overflow-hidden hidden md:flex">
                        {/* Abstract pattern */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0"></div>
                        <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-64 h-64 rounded-full bg-orange-500/30 blur-3xl"></div>

                        <div className="relative z-10">
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
                        <div className="md:hidden flex justify-center mb-6">
                            <Link to="/">
                                <img src={logo} alt="Travlio" className="w-32" />
                            </Link>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Create an account</h2>
                        <p className="text-gray-500 mb-8">Fill in your details below to get started.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <FaUser />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

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
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
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
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <FaLock />
                                        </div>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all outline-none"
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center mt-2 mb-4">
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
                                className="w-full bg-gray-900 hover:bg-black text-white font-medium py-3 rounded-xl transition-colors duration-300 active:scale-[0.98] shadow-lg shadow-gray-900/30 mt-2"
                            >
                                Create Account
                            </button>
                        </form>

                        <div className="mt-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-200 after:mt-0.5 after:flex-1 after:border-t after:border-gray-200">
                            <p className="mx-4 text-sm text-gray-400 font-medium">Or continue with</p>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium text-sm">
                                <FaGoogle className="text-red-500" /> Google
                            </button>
                            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-700 font-medium text-sm">
                                <FaFacebookF className="text-blue-600" /> Facebook
                            </button>
                        </div>

                        <div className="mt-8 text-center md:hidden">
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
