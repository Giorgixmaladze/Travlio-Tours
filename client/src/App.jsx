import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Home from './pages/Home'
import SearchProvider from './context/SearchContext'
import ToursProvider from './context/ToursContext'
import ReviewsProvider from './context/ReviewsContext'
function App() {

  return (
    <SearchProvider>
      <ToursProvider>
        <ReviewsProvider>
          <Home />
        </ReviewsProvider>
      </ToursProvider>
    </SearchProvider>
  )
}

export default App
