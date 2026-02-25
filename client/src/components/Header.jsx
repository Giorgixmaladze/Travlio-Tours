import logo from "../assets/logo.png"
import Navigation from "./Navigation"
import account from "../assets/account.svg"

const Header = () => {
    return (
        <header className="w-full flex justify-center bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
            <div className="w-10/12 h-20 flex items-center justify-between">
                <div className="flex gap-15 items-center">
                    <img src={logo} alt="Travlio logo" className="w-[180px]" />
                    <Navigation />
                </div>
                <span className="flex items-center gap-3">
                    <img src={account} alt="Account icon" />
                    <a
                        href=""
                        className="text-gray-800 text-[15px] hover:text-orange-500 transition-all duration-300 cursor-pointer font-medium"
                    >
                        Sign in
                    </a>
                </span>
            </div>
        </header>
    )
}

export default Header