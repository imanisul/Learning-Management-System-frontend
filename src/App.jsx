
import './App.css'

import {  Route, Routes } from 'react-router-dom'

import AboutUsPage from './Pages/AboutUsPage.jsx'
import HomePage from './Pages/HomePage.jsx'


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutUsPage />}/>

      </Routes>
    </>
  )
}

export default App
