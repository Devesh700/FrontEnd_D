import React from 'react'
import "./Home.css";
import { Button } from 'react-bootstrap'
import Contact from '../../Contact';
import Blog from '../Blogs/Blog';
import { Link } from 'react-router-dom';
import CourseData from '../Courses/CourseData';
const Home = () => {
  return (
    <>
      <div className='container-fluid p-0 home bg-primary text-white'>
        {/* <img src='Images/Home_bg.jpg' className='home-bg-image p-0' alt='Home_bg'/> */}
        <div className='container-fluid p-5 px-5 m-auto w-70'>
            <h1 className=' mt-5 text-capitalize fw-bold fs-1'>Transforming education <br/>through E-learning</h1>
            <p className='col-md-6'>Experience personalized, interactive learning from the comfort of your home. Enhance knowledge, build skills, and achieve remarkable academic progress with us. </p>
            <Link to="/register"><Button variant='danger' className='p-3 fw-bold btn-community rounded-1'> Join Our Learning Community</Button></Link>{''}
        </div>
      </div>


      <div className=' px-4 d-flex flex-wrap'>
            <div className='d-flex flex-wrap justify-content-start p-3 w-70'>
                <Link to={"/scheduled"} className='col-md-3 about-card card border border-0 mt-3 m-3 text-decoration-none'>
                    <img className="card-img-top" src="Images/Home_bg.jpg" alt="Card"/>
                    <div className="card-body">
                      <h4 className="card-title">Next Scheduled</h4>
                      <p className="card-text">Tosser what plonker mufty squiffy the wireless the monty.</p>
                      
                     </div>
                    
                    </Link>
                <Link to={"/scheduled"} className='col-md-3 about-card card border border-0 mt-3 m-3 text-decoration-none'>
                    <img className="card-img-top" src="Images/Home_bg.jpg" alt="Card"/>
                    <div className="card-body">
                      <h4 className="card-title">our Instructors</h4>
                      <p className="card-text">Tosser what plonker mufty squiffy the wireless the monty.</p>
                      
                     </div>
                    
                    </Link>
                  <Link to={"/scheduled"} className='col-md-3 about-card card border border-0 mt-3 m-3 text-decoration-none'>
                     <img className="card-img-top" src="Images/Home_bg.jpg" alt="Card"/>
                     <div className="card-body">
                       <h4 className="card-title">Benefits</h4>
                       <p className="card-text">Tosser what plonker mufty squiffy the wireless the monty.</p>
                      
                    </div>
                    
                    </Link>
                  <Link to={"/scheduled"} className='col-md-3 about-card card border border-0 mt-3 m-3 text-decoration-none'>
                     <img className="card-img-top" src="Images/Home_bg.jpg" alt="Card"/>
                     <div className="card-body">
                       <h4 className="card-title">Programs we offer</h4>
                       <p className="card-text">Tosser what plonker mufty squiffy the wireless the monty.</p>
                      
                     </div>
                    
                    </Link>
            </div>
            <form className=' card form-container w-30'>
                    <fieldset className='p-3'>
                        <p className='display-5'>Registration for Course Enroll</p>
                        <input placeholder='Name' type='text' className='form-control mt-2'/>
                        <input placeholder='Email' type='text' className='form-control mt-2'/>
                        <input placeholder='Phone' type='text' className='form-control mt-2'/>
                        <select name="course" id="course" className='form-control mt-2 mb-2' >
                          {CourseData.map((elem,index)=>{
                            return (
                              <>
                              <option value={elem.name} key={index}>{elem.name}</option> 
                              </>
                            )
                          })}
                        </select>
                        <Button variant='primary' className=' mt-2 px-5' style={{width:"100%"}}>Apply</Button>
                    </fieldset>
                </form>
        </div>
      <Contact/>
      <Blog/>
    </>
  )
}
export default Home;
