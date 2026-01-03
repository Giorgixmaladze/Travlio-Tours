const Navigation = () => {
    return(
        <nav>
            <ul className="flex items-center gap-8">
                <li ><a className="text-gray-800 hover:text-orange-600 transition-all duration-300 cursor-pointer" href="">Home</a></li>
                <li ><a className="text-gray-800 hover:text-orange-600 transition-all duration-300 cursor-pointer" href="">Tours</a></li>
                <li ><a className="text-gray-800 hover:text-orange-600 transition-all duration-300 cursor-pointer" href="">About</a></li>
                <li ><a className="text-gray-800 hover:text-orange-600 transition-all duration-300 cursor-pointer" href="">Contact</a></li>
                <li ><a className="text-gray-800 hover:text-orange-600 transition-all duration-300 cursor-pointer" href="">Blog</a></li>
            </ul>
        </nav>
    )
}


export default Navigation