import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Home from './pages/Home'
import SearchProvider from './context/SearchContext'
import ToursProvider from './context/ToursContext'
function App() {

  return (
    <SearchProvider>
      <ToursProvider>
     <Home/>
      </ToursProvider>
    </SearchProvider>
  )
}

export default App
