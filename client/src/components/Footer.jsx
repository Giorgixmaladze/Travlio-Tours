import logo from "@/assets/logo-light.png"
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"

const quickLinks = ["About", "Tours", "Blog", "Contact", "Terms & Conditions"]
const categories = ["Travel", "Lifestyle", "Fashion", "Destinations", "Food & Drinks"]

const SocialBtn = ({ children }) => (
    <a
        href="#"
        className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-200"
    >
        {children}
    </a>
)

const Footer = () => {
    return (
        <footer>
            {/* Orange accent top bar */}
            <div className="h-1 bg-orange-500 w-full" />

            {/* Main footer */}
            <div className="bg-[#252C41] pt-14 pb-10">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand column */}
                    <div className="flex flex-col gap-5">
                        <img src={logo} alt="Travlio" className="w-32" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Discover the world with Travlio — handpicked tours, expert guides, and memories that last a lifetime.
                        </p>
                        <div className="flex gap-3 mt-1">
                            <SocialBtn><FaFacebookF className="text-xs" /></SocialBtn>
                            <SocialBtn><FaTwitter className="text-xs" /></SocialBtn>
                            <SocialBtn><FaYoutube className="text-xs" /></SocialBtn>
                            <SocialBtn><FaLinkedinIn className="text-xs" /></SocialBtn>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-white font-semibold text-base relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-orange-500">
                            Quick Links
                        </h4>
                        <ul className="flex flex-col gap-2">
                            {quickLinks.map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 text-sm hover:text-orange-400 transition-colors duration-200 flex items-center gap-1">
                                        <span className="text-orange-500 text-xs">›</span> {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-white font-semibold text-base relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-orange-500">
                            Categories
                        </h4>
                        <ul className="flex flex-col gap-2">
                            {categories.map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 text-sm hover:text-orange-400 transition-colors duration-200 flex items-center gap-1">
                                        <span className="text-orange-500 text-xs">›</span> {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-white font-semibold text-base relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-orange-500">
                            Contact Us
                        </h4>
                        <ul className="flex flex-col gap-3">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <FaMapMarkerAlt className="text-orange-500 mt-0.5 shrink-0" />
                                123 Travel Street, Wanderlust City
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <FaPhone className="text-orange-500 shrink-0" />
                                +1 234 567 890
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <FaEnvelope className="text-orange-500 shrink-0" />
                                hello@travlio.com
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright bar */}
            <div className="bg-[#1c2235] py-4">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
                    <p className="text-gray-500 text-xs">
                        © 2025 <span className="text-orange-400 font-medium">Travlio</span>. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs">
                        Designed with ♥ for travelers worldwide
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer