import React from 'react'
import { Briefcase, Mail } from 'lucide-react'

const OverviewTab = ({ userData }) => {
    return (
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
                        {userData?.email}
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
    )
}

export default OverviewTab
