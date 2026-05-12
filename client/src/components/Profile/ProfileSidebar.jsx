import React from 'react'
import { LogOut } from 'lucide-react'

const ProfileSidebar = ({ tabs, activeTab, setActiveTab, logout }) => {
    return (
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
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
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

                    <button 
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-200" 
                        onClick={logout}
                    >
                        <LogOut size={20} />
                        Log Out
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default ProfileSidebar
