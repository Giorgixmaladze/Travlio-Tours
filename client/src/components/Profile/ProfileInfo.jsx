import React from 'react'
import { Camera, MapPin, Calendar, Edit2 } from 'lucide-react'

const ProfileInfo = ({ userData }) => {
    return (
        <>
            {/* Header / Cover */}
            <div className="h-64 md:h-80 w-full relative">
                <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80"
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
                            alt={userData?.name}
                            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-md bg-white"
                        />
                        <button className="absolute bottom-2 right-2 bg-orange-500 text-white p-2.5 rounded-full hover:bg-orange-600 transition-colors shadow-sm group-hover:scale-110 active:scale-95 duration-200">
                            <Camera size={20} />
                        </button>
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{userData?.userName}</h1>
                        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6 text-gray-600">
                            <span className="flex items-center gap-1.5 bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                                {userData?.role}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm">
                                <MapPin size={16} className="text-gray-400" />
                                {userData?.location}
                            </span>
                            <span className="flex items-center gap-1.5 text-sm">
                                <Calendar size={16} className="text-gray-400" />
                                {userData?.joinDate}
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
            </div>
        </>
    )
}

export default ProfileInfo
