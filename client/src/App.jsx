import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Home from './pages/Home'
import Tours from './pages/Tours'
import SearchProvider from './context/SearchContext'
import ToursProvider from './context/ToursContext'
import ReviewsProvider from './context/ReviewsContext'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <SearchProvider>
      <ToursProvider>
        <ReviewsProvider>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tours' element={<Tours />} />
          </Routes>
        </ReviewsProvider>
      </ToursProvider>
    </SearchProvider>
  )
}

export default App
