import React, { useState, useEffect, useContext } from 'react';
import { X, User, Mail, MapPin, Phone, Camera, Briefcase } from 'lucide-react';
import { AuthContext } from '../../context/AuthContext';
const ProfileEdit = ({ isOpen, onClose, userData }) => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        location: '',
        phone: '',
        role: ''
    });
    const {updateProfile}  = useContext(AuthContext)

    useEffect(() => {
        if (userData) {
            setFormData({
                userName: userData.userName || '',
                email: userData.email || '',
                location: userData.location || '',
                phone: userData.phone || '',
                role: userData.role || ''
            });
        }
    }, [userData]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Make sure to add save api logic in future
        updateProfile(formData)
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100 opacity-100 animate-in fade-in zoom-in-95">
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-8 sm:px-10 flex justify-between items-center text-white relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                    <div>
                        <h2 className="text-2xl font-bold tracking-wide">Edit Profile</h2>
                        <p className="text-orange-100 mt-1 text-sm font-medium">Update your personal information</p>
                    </div>
                    <button 
                        onClick={onClose}
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors backdrop-blur-md z-10"
                    >
                        <X size={20} className="text-white" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-10">
                    {/* Avatar Upload */}
                    <div className="flex justify-center -mt-16 mb-8 relative z-10">
                        <div className="relative group">
                            <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-gray-100 shadow-md">
                                <img 
                                    src={userData?.photo || "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlNV9zaW1wbGVfbWluaW1hbGlzdGljX2JsYWNrX2FuZF93aGl0ZV9pY29uX29mX2FfdV85MTU4MGM0Yi0yZDI3LTRjY2MtYWZhMC1mODFlOTNlNzhhOGUucG5n.png"} 
                                    alt="Profile" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <button 
                                type="button"
                                className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 hover:scale-110 transition-all duration-200"
                            >
                                <Camera size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Inputs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Username */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <User size={16} className="text-orange-500" />
                                Username
                            </label>
                            <input 
                                type="text"
                                name="userName"
                                value={formData.userName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-200 text-gray-800"
                                placeholder="Enter your username"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <Mail size={16} className="text-orange-500" />
                                Email Address
                            </label>
                            <input 
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-200 text-gray-800"
                                placeholder="Enter your email"
                                
                                disabled
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <Phone size={16} className="text-orange-500" />
                                Phone Number
                            </label>
                            <input 
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-200 text-gray-800"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        {/* Location */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <MapPin size={16} className="text-orange-500" />
                                Location
                            </label>
                            <input 
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-200 text-gray-800"
                                placeholder="Enter your location"
                            />
                        </div>

                        {/* Role */}
                        <div className="space-y-2 sm:col-span-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <Briefcase size={16} className="text-orange-500" />
                                Professional Role
                            </label>
                            <input 
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all duration-200 text-gray-800"
                                placeholder="e.g. Travel Blogger, Photographer"
                                disabled
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex justify-end gap-3 pt-6 border-t border-gray-100">
                        <button 
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            className="px-8 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-600/40 transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileEdit;