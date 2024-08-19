import React from 'react'
import Home from './home/Home'
import Contact from './components/Contact'
import Course from './components/Course'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Contacts from './contacts/Contacts'
import Signup from './components/Signup'
import Abouts from './about/Abouts'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/about' element={<Abouts/>}/>
        <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Toaster/>
  </div>
      
    </>
  )
}

export default App