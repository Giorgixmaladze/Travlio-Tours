import logo from "@/assets/logo-light.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-[#252C41] pt-15 flex justify-around items-center pb-10">
            {/* contact */}
            <div className="flex flex-col gap-5  justify-center">
                <img src={logo} alt="" className="w-35" />
                <span className="flex flex-col gap-1 text-gray-400">
                    <p className="text-gray-500 font-semibold">Email:</p>
                    hello@travlio.com
                </span>
                <span className="flex flex-col gap-1  text-gray-400">
                    <p className="text-gray-500 font-semibold">Call:</p>
                    +1234567890
                </span>
                <div className="flex gap-5">
                    <FaFacebookF  className="text-gray-500 text-md"/>
                    <FaTwitter className="text-gray-500 text-md"/>
                    <FaYoutube className="text-gray-500 text-md"/>
                    <FaLinkedinIn className="text-gray-500 text-md"/>
                </div>
            </div>
            {/* quick links */}
            <div className="flex flex-col gap-5">
                <h4 className="text-white font-semibold text-lg">Quick Links</h4>
                <ul className="text-gray-500 flex flex-col gap-2 font-medium">
                    <li>About</li>
                    <li>Contact</li>
                    <li>My Account</li>
                    <li>Confirmations</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            {/* categories */}
            <div  className="flex flex-col gap-5">
                <h4 className="text-white font-semibold text-lg">Categories</h4>
                <ul className="text-gray-500 flex flex-col gap-2 font-medium">
                    <li>Travel</li>
                    <li>Lifestyle</li>
                    <li>Fashion</li>
                    <li>Destinations</li>
                    <li>Food & Drinks</li>
                </ul>
            </div>

        </div>

    )
}

export default Footer