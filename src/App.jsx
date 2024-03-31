
import './App.css'

import {  Route, Routes } from 'react-router-dom'

import RequireAuth from './components/Auth/RequireAuth.jsx'
import AboutUsPage from './Pages/AboutUsPage.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import CourseDescription from './Pages/Course/CourseDescription.jsx'
import CourseList from './Pages/Course/CourseList.jsx'
import CreateCourse from './Pages/Course/CreateCourse.jsx'
import Addlecture from './Pages/Dashboard/Addlecture.jsx'
import Displaylecture from './Pages/Dashboard/Displaylecture.jsx'
import Denied from './Pages/Denied.jsx'
import HomePage from './Pages/HomePage.jsx'
import Login from './Pages/Login.jsx'
import NotFound from './Pages/NotFound.jsx'
import Checkout from './Pages/Payment/Checkout.jsx'
import CheckoutFail from './Pages/Payment/CheckoutFail.jsx'
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess.jsx'
import SignUp from './Pages/SignUp.jsx'
import EditProfile from './Pages/User/EditProfile.jsx'
import Profile from './Pages/User/Profile.jsx'


function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutUsPage />}/>
        <Route path='/courses' element= {<CourseList/>}/>  
        <Route path='/contact' element={<ContactUs/>}/> 
        <Route path='/denied' element= {<Denied/>}/>
        <Route path='/courses/description' element= {<CourseDescription/>}/>

        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
            <Route path='/course/create'  element= {<CreateCourse/>}/>
            <Route path='/course/addlecture'  element= {<Addlecture/>}/>
        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN","USER"]}/>}>
            <Route path='/user/profile' element={<Profile/>}/>
            <Route path='/user/updateprofile' element={<EditProfile/>}/>
            <Route path='/checkout' element={<Checkout/>}/> 
            <Route path='/checkout/success' element={<CheckoutSuccess/>}/>
            <Route path='/checkout/fail' element={<CheckoutFail/>}/>
            <Route path='/course/displaylecture' element={<Displaylecture/>} />
        </Route>

        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </>
  )
}

export default App
