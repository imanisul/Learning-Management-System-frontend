
import './App.css'

import {  Route, Routes } from 'react-router-dom'

import AboutUsPage from './Pages/AboutUsPage.jsx'
import HomePage from './Pages/HomePage.jsx'
import NotFound from './Pages/NotFound.jsx'
import SignUp from './Pages/SignUp.jsx'


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutUsPage />}/>

        <Route path='/signup' element={<SignUp/>}/>

        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </>
  )
}

export default App
