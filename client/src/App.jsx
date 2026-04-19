import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Home from './pages/Home'
import Tours from './pages/Tours'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SearchProvider from './context/SearchContext'
import ToursProvider from './context/ToursContext'
import ReviewsProvider from './context/ReviewsContext'
import { Routes, Route } from 'react-router-dom'
import StaffContextProvider from './context/StaffContext'
import AuthProvider from './context/AuthContext'
import Profile from './pages/Profile'
import TourDetails from './pages/TourDetails'
import Booking from './pages/Booking'
import Confirmation from './pages/Confirmation'
import BookProvider from './context/BookContext'
import BlogProvider from './context/BlogContext'
import BlogDetails from './pages/BlogDetails'

function App() {

  return (
    <SearchProvider>
      <ToursProvider>
        <ReviewsProvider>
          <StaffContextProvider>
            <AuthProvider>
              <BookProvider>
                <BlogProvider>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tours' element={<Tours />} />
                <Route path='/tours/:id' element={<TourDetails />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/blog/:id' element={<BlogDetails />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/booking/:id' element={<Booking />} />
                <Route path='/confirmation' element={<Confirmation />} />
              </Routes>
                </BlogProvider>
              </BookProvider>
            </AuthProvider>
          </StaffContextProvider>
        </ReviewsProvider>
      </ToursProvider>
    </SearchProvider>
  )
}

export default App
