import React, { useState } from 'react';
import { FaSearch, FaFilter, FaChevronDown, FaCalendarAlt, FaDollarSign, FaStar, FaHistory } from 'react-icons/fa';

const ToursFilter = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const categories = ['All', 'Adventure', 'Beach', 'City', 'Cultural', 'Nature', 'Relaxing'];

    return (
        <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-8">
            {/* Search and Main Filters */}
            <div className="flex flex-col lg:flex-row gap-4 items-center">
                {/* Search Input */}
                <div className="relative w-full lg:flex-1">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <FaSearch size={16} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for your next adventure..."
                        className="block w-full pl-11 pr-4 py-3 bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 rounded-lg text-sm transition-all duration-200 outline-none"
                    />
                </div>

                {/* Quick Filters */}
                <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                        <FaCalendarAlt className="text-orange-500" />
                        <span>Duration</span>
                        <FaChevronDown size={10} className="text-gray-400" />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                        <FaDollarSign className="text-orange-500" />
                        <span>Price</span>
                        <FaChevronDown size={10} className="text-gray-400" />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                        <FaStar className="text-orange-500" />
                        <span>Rating</span>
                        <FaChevronDown size={10} className="text-gray-400" />
                    </button>
                    <div className="h-8 w-px bg-gray-200 mx-1 hidden lg:block"></div>
                    <button 
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className={`flex items-center gap-2 px-5 py-2.5 ${isFilterOpen ? 'bg-orange-500 text-white' : 'bg-orange-50 text-orange-600 hover:bg-orange-100'} rounded-lg text-sm font-bold transition-all duration-300 shadow-sm whitespace-nowrap`}
                    >
                        <FaFilter />
                        <span>More Filters</span>
                    </button>
                </div>
            </div>

            {/* Category Chips */}
            <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((cat, i) => (
                    <button
                        key={cat}
                        className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                            i === 0 
                                ? 'bg-orange-500 text-white shadow-md shadow-orange-200' 
                                : 'bg-white text-gray-500 border border-gray-100 hover:border-orange-200 hover:text-orange-500'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Expandable Filter Panel (Design Only) */}
            {isFilterOpen && (
                <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                            Experience Type
                        </h4>
                        <div className="space-y-2">
                            {['Solo Travel', 'Group Tour', 'Family Friendly', 'Romantic'].map(item => (
                                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer" />
                                    <span className="text-sm text-gray-600 group-hover:text-orange-500 transition-colors">{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                            Amenities
                        </h4>
                        <div className="space-y-2">
                            {['Free WiFi', 'Breakfast Included', 'Free Parking', 'Pool Access'].map(item => (
                                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer" />
                                    <span className="text-sm text-gray-600 group-hover:text-orange-500 transition-colors">{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                   
                </div>
            )}
        </div>
    );
};

export default ToursFilter;
