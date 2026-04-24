import { useState, useContext, useEffect } from 'react'
import { Calendar, Settings, Briefcase, PenLine } from 'lucide-react'
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

                            {activeTab === 'settings' && <SettingsTab />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile