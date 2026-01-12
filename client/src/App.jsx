import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Home from './pages/Home'
import SearchProvider from './context/SearchContext'

function App() {

  return (
    <SearchProvider>
     <Home/>
    </SearchProvider>
  )
}

export default App
