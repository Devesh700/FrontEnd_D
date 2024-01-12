import React from 'react'
import "./Home.css";
import Contact from '../../Contact';
import Blog from './Blog';
import CourseData from '../Courses/CourseData';
import Hero from './Hero';
import Categories from './Categories';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate=useNavigate();
  const category=[...new Set(CourseData.map((elem) => elem.category))];
  return (
    <>
      <Hero/>
      <div className='w-100 d-flex flex-wrap p-3 px-lg-5'>
        <div className='col-md-6 p-5'>
          <p className='fs-4'>Better Learning. better Results</p>
          <h2 className='text-capitalize fs-3'>Online education platform that fits for everyone</h2>
          <p className=' fw-light text-capitalize fs-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis magnam in voluptatem quia atque debitis? Alias hic magnam dolore, quis ipsa voluptate id suscipit ipsam?</p>
          <button className='btn btn-community py-3 px-5 fw-bold text-capitalize btn-success'>explore more about us</button>
        </div>
        <div className='col-md-6 px-3 d-flex position-relative align-items-center'>
          <img src='https://tse2.mm.bing.net/th?id=OIP._gsgafzrhrnMQbJYZI-flQHaE8&pid=Api&P=0&h=180' className='rounded-circle ceo-image' alt=''/>
          <div className=' position-absolute founder '>
            <p>Founder & CEO</p>
          <p>Manish mani</p>
          </div>
        </div>
      </div>
      <Contact/>
      <Blog/>
      <div className='py-3'>
        <Categories category={category.slice(0,4)}/>
      <button 
      className='btn btn-community d-grid mx-auto px-5 py-2 btn-info' 
      onClick={()=>navigate("/categories", {state:category})}>
         explore more  ></button>
      </div>
    </>
  )
}
export default Home;
