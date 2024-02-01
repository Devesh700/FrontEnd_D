import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Components/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import CourseList from './Components/Pages/Courses/CourseList';
import Contact from './Components/Contact';
import CourseDescription from './Components/Pages/Courses/CourseDescription';
import Login from './Components/Authentication/Login';
import Registration from './Components/Authentication/Registration';
import Scheduled from './Components/Pages/Nextscheduled/Scheduled';
import Footer from './Components/Navbar/Footer';
import Categories from './Components/Pages/Categories/Categories';
import Instructors from './Components/Pages/Instructor/Instructor';
import InstructorDetail from './Components/Pages/Instructor/InstructorDetail';
import MainProfile from './Components/Pages/Profile/MainProfile';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/profile' element={<MainProfile/>}></Route>
        <Route path='/courses' element={<CourseList/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/courses/coursedescription' element={<CourseDescription/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='register/' element={<Registration/>}></Route>
        <Route  path='/scheduled' element={<Scheduled/>}></Route>
        <Route  path='/categories' element={<Categories/>}></Route>
        <Route  path='/instructors' element={<Instructors/>}></Route>
        <Route  path='/instructors/detail' element={<InstructorDetail/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
