import { Link } from "react-router-dom"

const Navigation = () => {
    return(
        <nav>
            <ul className="flex items-center gap-8">
                <li ><Link to="/" className="text-gray-800 hover:text-orange-600 transition-all duration-300 cursor-pointer" >Home</Link></li>
                <li ><Link to="/tours" className="text-gray-800 hover:text-orange-600 transition-all duration-300 cursor-pointer" >Tours</Link></li>
                <li ><Link to="/about" className="text-gray-800 hover:text-orange-600 transition-all duration-300 cursor-pointer" >About</Link></li>
                <li ><Link to="/contact" className="text-gray-800 hover:text-orange-600 transition-all duration-300 cursor-pointer" >Contact</Link></li>
                <li ><Link to="/blog" className="text-gray-800 hover:text-orange-600 transition-all duration-300 cursor-pointer" >Blog</Link></li>
            </ul>
        </nav>
    )
}


export default Navigation