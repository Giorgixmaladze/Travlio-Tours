import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import logo from "../assets/logo.png";

const VerifySuccess = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center overflow-hidden relative py-12">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

            <div className="w-full max-w-md mx-4 bg-white rounded-3xl shadow-2xl p-10 text-center z-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0"></div>

                <div className="relative z-10">
                    <div className="flex justify-center mb-8">
                        <Link to="/">
                            <img src={logo} alt="Travlio" className="w-32" />
                        </Link>
                    </div>

                    <div className="flex justify-center mb-6">
                        <FaCheckCircle className="text-green-500 text-6xl shadow-sm rounded-full bg-white" />
                    </div>

                    <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight">Email Verified!</h2>

                    <p className="text-gray-500 mb-8 text-lg">
                        Your account has been successfully verified. You can now access all features of Travlio Tours.
                    </p>

                    <Link
                        to="/signin"
                        className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 active:scale-[0.98] shadow-lg shadow-orange-500/30"
                    >
                        Go to Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VerifySuccess;
