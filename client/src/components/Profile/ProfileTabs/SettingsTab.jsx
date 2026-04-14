import React from 'react'
import { Settings, ChevronRight } from 'lucide-react'

const SettingsTab = () => {
    return (
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
    )
}

export default SettingsTab
