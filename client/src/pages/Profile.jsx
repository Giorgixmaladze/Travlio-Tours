import { useState, useContext, useEffect } from 'react'
import { Calendar, Heart, Settings, Briefcase, PenLine } from 'lucide-react'
import { AuthContext } from '../context/AuthContext'
import { BookContext } from '../context/BookContext'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import ProfileInfo from '../components/Profile/ProfileInfo'
import ProfileSidebar from '../components/Profile/ProfileSidebar'
import OverviewTab from '../components/Profile/ProfileTabs/OverviewTab'
import BookingsTab from '../components/Profile/ProfileTabs/BookingsTab'
import SettingsTab from '../components/Profile/ProfileTabs/SettingsTab'
import MyBlogsTab from '../components/Profile/ProfileTabs/MyBlogsTab'

const Profile = () => {
    const { user, logout } = useContext(AuthContext)
    const { getUserBookings } = useContext(BookContext)
    const [activeTab, setActiveTab] = useState('overview')
    const [bookings, setBookings] = useState([])
    const [loadingBookings, setLoadingBookings] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (activeTab === 'bookings') {
            const fetchBookings = async () => {
                setLoadingBookings(true)
                try {
                    const res = await getUserBookings()
                    if (res.success) {
                        setBookings(res.data)
                    }
                } catch (error) {
                    console.error("Failed to fetch bookings:", error)
                } finally {
                    setLoadingBookings(false)
                }
            }
            fetchBookings()
        }
    }, [activeTab, getUserBookings])

    const userData = user

    const tabs = [
        { id: 'overview', label: 'Overview', icon: Briefcase },
        { id: 'bookings', label: 'My Bookings', icon: Calendar },
        { id: 'blogs', label: 'My Blogs', icon: PenLine },
        { id: 'favorites', label: 'Favorites', icon: Heart },
        { id: 'settings', label: 'Settings', icon: Settings }
    ]

    return (
        <div className="min-h-screen bg-gray-50 pb-12 w-full">
            <Header />
            <ProfileInfo userData={userData} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <ProfileSidebar 
                        tabs={tabs} 
                        activeTab={activeTab} 
                        setActiveTab={setActiveTab} 
                        logout={logout} 
                    />

                    <div className="flex-1">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 min-h-[400px]">
                            {activeTab === 'overview' && <OverviewTab userData={userData} />}
                            {activeTab === 'bookings' && (
                                <BookingsTab 
                                    bookings={bookings} 
                                    loadingBookings={loadingBookings} 
                                    navigate={navigate} 
                                />
                            )}
                            {activeTab === 'blogs' && <MyBlogsTab userData={userData} />}
                            {activeTab === 'favorites' && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-12">
                                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                                        <Heart size={32} className="text-gray-300" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-1">Your wishlist is empty</h3>
                                    <p className="text-gray-500 mb-6 max-w-sm mx-auto">Save your favorite tours here to easily find them later when you're ready to book.</p>
                                </div>
                            )}
                            {activeTab === 'settings' && <SettingsTab />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile