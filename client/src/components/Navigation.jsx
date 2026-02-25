import { Link, useLocation } from "react-router-dom"

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/tours", label: "Tours" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blog" },
]

const Navigation = () => {
    const { pathname } = useLocation()

    return (
        <nav>
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
    )
}

export default Navigation