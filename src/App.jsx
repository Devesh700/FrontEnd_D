import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import CourseList from './Components/Pages/Courses/CourseList';
import Contact from './Components/Contact';
import Blog from './Components/Pages/Blogs/Blog';
import CourseDescription from './Components/Pages/Courses/CourseDescription';
import Login from './Components/Authentication/Login';
import Registration from './Components/Authentication/Registration';
import Scheduled from './Components/Pages/Nextscheduled/Scheduled';
import Profile from './Components/Pages/Profile/Profile';
import Footer from './Components/Navbar/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/Courses' element={<CourseList/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Blogs' element={<Blog/>}></Route>
        <Route path='/Courses/coursedescription' element={<CourseDescription/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='register/' element={<Registration/>}></Route>
        <Route  path='/scheduled' element={<Scheduled/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
