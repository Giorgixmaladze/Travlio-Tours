import logo from "../assets/logo.png"
import Navigation from "./Navigation"
import account from "../assets/account.svg"
const Header = ()=>{
    return (
        <header className="w-full flex justify-center bg-white">
            <div className="w-10/12 h-25 flex items-center justify-between">
                <div className="flex gap-15 items-center ">
                    <img src={logo} alt="Website logo" className="w-[200px]" />
                    <Navigation />
                </div>
                <span className="flex items-center gap-3">
                    <img src={account} alt="Account icon" />
                    <a href="" className="text-gray-800 text-[15px] hover:text-orange-600 transition-all duration-300 cursor-pointer">Sign in</a>
                </span>
            </div>
        </header>
    )
}

export default Header