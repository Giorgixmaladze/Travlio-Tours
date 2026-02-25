import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/logo.png"
import account from "../assets/account.svg"

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/tours", label: "Tours" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blog" },
]

const Header = () => {
    const { pathname } = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="w-full bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="Travlio logo" className="w-36 md:w-44" />
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {navLinks.map(({ to, label }) => {
                            const isActive = pathname === to
                            return (
                                <li key={to}>
                                    <Link
                                        to={to}
                                        className={`relative text-[15px] font-medium transition-colors duration-300 pb-1
                                            ${isActive
                                                ? "text-orange-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange-500 after:rounded"
                                                : "text-gray-700 hover:text-orange-500"
                                            }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                {/* Desktop sign in */}
                <span className="hidden md:flex items-center gap-3">
                    <img src={account} alt="Account icon" />
                    <a href="" className="text-gray-800 text-sm hover:text-orange-500 transition-colors duration-300 font-medium">
                        Sign in
                    </a>
                </span>

                {/* Mobile hamburger button */}
                <button
                    className="md:hidden text-gray-700 text-xl p-2"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile drawer */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
                    <ul className="flex flex-col">
                        {navLinks.map(({ to, label }) => {
                            const isActive = pathname === to
                            return (
                                <li key={to} className="border-b border-gray-50">
                                    <Link
                                        to={to}
                                        onClick={() => setMenuOpen(false)}
                                        className={`block px-6 py-4 text-sm font-medium transition-colors duration-200
                                            ${isActive ? "text-orange-500 bg-orange-50" : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"}`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            )
                        })}
                        <li className="px-6 py-4">
                            <a href="" className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                                <img src={account} alt="Account" className="w-5" /> Sign in
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header