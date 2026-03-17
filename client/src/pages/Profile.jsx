import { useState, useContext } from 'react'
import { Camera, MapPin, Mail, Calendar, Settings, Heart, Briefcase, ChevronRight, LogOut, Edit2 } from 'lucide-react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const { user } = useContext(AuthContext) || {}
    const [activeTab, setActiveTab] = useState('overview')
    const navigate = useNavigate()

    // Fallback/Mock data
    const userData = user || {
        name: 'Sarah Jenkins',
        email: 'sarah.jenkins@example.com',
        role: 'Explorer',
        location: 'San Francisco, CA',
        joinDate: 'Joined March 2024',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&h=256&q=80',
        cover: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&h=400&q=80'
    }

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Briefcase },
        { id: 'bookings', label: 'My Bookings', icon: Calendar },
        { id: 'favorites', label: 'Favorites', icon: Heart },
        { id: 'settings', label: 'Settings', icon: Settings }
    ]

    return (
        <div className="min-h-screen bg-gray-50 pb-12 w-full">
            {/* Header / Cover */}
            <div className="h-64 md:h-80 w-full relative">
                <img 
                    src={userData.cover} 
                    alt="Cover" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <button className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2">
                    <Camera size={18} />
                    Change Cover
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Profile Info Section */}
                <div className="relative -mt-24 sm:-mt-32 mb-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-8">
                    <div className="relative group">
                        <img 
                            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlNV9zaW1wbGVfbWluaW1hbGlzdGljX2JsYWNrX2FuZF93aGl0ZV9pY29uX29mX2FfdV85MTU4MGM0Yi0yZDI3LTRjY2MtYWZhMC1mODFlOTNlNzhhOGUucG5n.png" 
                            alt={userData.name} 
                            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-md bg-white"
                        />
                        <button className="absolute bottom-2 right-2 bg-orange-500 text-white p-2.5 rounded-full hover:bg-orange-600 transition-colors shadow-sm group-hover:scale-110 active:scale-95 duration-200">
                            <Camera size={20} />
                        </button>
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{userData.name}</h1>
                        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6 text-gray-600">
                            <span className="flex items-center gap-1.5 bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                                {userData.role}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm">
                                <MapPin size={16} className="text-gray-400" />
                                {userData.location}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm">
                                <Calendar size={16} className="text-gray-400" />
                                {userData.joinDate}
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 px-6 py-2.5 rounded-xl font-medium transition-colors border border-gray-200">
                            <Edit2 size={18} />
                            Edit Profile
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Tabs */}
                    <div className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 lg:sticky lg:top-24">
                            <nav className="flex flex-col gap-1">
                                {tabs.map((tab) => {
                                    const Icon = tab.icon
                                    const isActive = activeTab === tab.id
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                                                isActive 
                                                ? 'bg-orange-50 text-orange-600' 
                                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                        >
                                            <Icon size={20} className={isActive ? 'text-orange-500' : 'text-gray-400'} />
                                            {tab.label}
                                            {isActive && (
                                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500" />
                                            )}
                                        </button>
                                    )
                                })}
                                
                                <div className="h-px bg-gray-100 my-2 mx-4" />
                                
                                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-200">
                                    <LogOut size={20} />
                                    Log Out
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex-1">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 min-h-[400px]">
                            {activeTab === 'overview' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <Briefcase className="text-orange-500" />
                                        Profile Overview
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-colors hover:border-orange-200">
                                            <p className="text-sm text-gray-500 mb-1">Email Address</p>
                                            <p className="font-medium text-gray-900 flex items-center gap-2">
                                                <Mail size={16} className="text-gray-400" />
                                                {userData.email}
                                            </p>
                                        </div>
                                        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-colors hover:border-orange-200">
                                            <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                                            <p className="font-medium text-gray-900">+1 (555) 123-4567</p>
                                        </div>
                                        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-colors hover:border-orange-200 md:col-span-2">
                                            <p className="text-sm text-gray-500 mb-2">Bio</p>
                                            <p className="text-gray-700 leading-relaxed">
                                                Avid traveler and adventure seeker. Always looking for the next mountain to climb or ocean to dive into. Have visited over 20 countries and planning to see them all.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'bookings' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <Calendar className="text-orange-500" />
                                        Recent Bookings
                                    </h2>
                                    <div className="flex flex-col items-center justify-center text-center py-12">
                                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                            <Calendar size={32} className="text-gray-300" />
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-1">No bookings yet</h3>
                                        <p className="text-gray-500 mb-6 max-w-sm">When you book a tour, it will appear here so you can easily manage your adventure.</p>
                                        <button 
                                            onClick={() => navigate('/tours')}
                                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-sm shadow-orange-500/30"
                                        >
                                            Explore Tours
                                        </button>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'favorites' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <Heart className="text-orange-500" />
                                        Saved Tours
                                    </h2>
                                    <div className="flex flex-col items-center justify-center text-center py-12">
                                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                            <Heart size={32} className="text-gray-300" />
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900 mb-1">Your wishlist is empty</h3>
                                        <p className="text-gray-500 mb-6 max-w-sm">Save your favorite tours here to easily find them later when you're ready to book.</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'settings' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                        <Settings className="text-orange-500" />
                                        Account Settings
                                    </h2>
                                    <p className="text-gray-600 mb-6">Manage your account preferences and notification settings here.</p>
                                    <div className="space-y-4">
                                        {[
                                            { title: 'Email Notifications', desc: 'Receive updates about your bookings' },
                                            { title: 'Marketing Emails', desc: 'Get offers and travel recommendations' },
                                            { title: 'Password', desc: 'Change your current password' }
                                        ].map((setting, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors cursor-pointer group">
                                                <div>
                                                    <h4 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">{setting.title}</h4>
                                                    <p className="text-sm text-gray-500">{setting.desc}</p>
                                                </div>
                                                <button className="text-gray-400 group-hover:text-orange-500 transition-colors p-2">
                                                    <ChevronRight size={20} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile