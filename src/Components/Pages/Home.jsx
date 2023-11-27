import React from 'react'
import "./Home.css";
import Button from 'react-bootstrap/Button';
const Home = () => {
  return (
    <>
      <div className='home-main'>
        <img src='Images/Home_bg.jpg' className='home-bg-image' alt='Home_bg'/>
        <div className='home'>
            <h1 className='display-1 mt-5 text-capitalize fw-bold'>Transforming education <br/>through E-learning</h1>
            <p className='home-disclaimer'>Experience personalized, interactive learning from the comfort of your home. Enhance knowledge, build skills, and achieve remarkable academic progress with us. </p>
            <Button variant='danger' className='p-3 fw-bold btn-community'> Join Our Learning Community</Button>{''}
        </div>
      </div>
      <div className='home-main-2'>
        <div className='home-grid'>
            <div className='first-section p-3 mx-auto'>
                <div class="card border border-0">
                    <img class="card-img-top" src="img_avatar1.png" alt="Card"/>
                    <div class="card-body">
                      <h4 class="card-title">Next Scheduled</h4>
                      <p class="card-text">Tosser what plonker mufty squiffy the wireless the monty.</p>
                      
                     </div>
                    </div>
                <div class="card border border-0">
                    <img class="card-img-top" src="img_avatar1.png" alt="Card"/>
                    <div class="card-body">
                      <h4 class="card-title">Online Courses</h4>
                      <p class="card-text">Tosser what plonker mufty squiffy the wireless the monty.</p>
                      
                     </div>
                    </div>
                                 <div class="card border border-0">
                     <img class="card-img-top" src="img_avatar1.png" alt="Card"/>
                     <div class="card-body">
                       <h4 class="card-title">Graduation</h4>
                       <p class="card-text">Tosser what plonker mufty squiffy the wireless the monty.</p>
                      
                    </div>
                    </div>
                <div class="card border border-0">
                     <img class="card-img-top" src="img_avatar1.png" alt="Card"/>
                     <div class="card-body">
                       <h4 class="card-title">University Life</h4>
                       <p class="card-text">Tosser what plonker mufty squiffy the wireless the monty.</p>
                      
                     </div>
                    </div>
            </div>
            <div className='second-section'>
                <form className='card form-container mx-auto'>
                    <fieldset className='p-3'>
                        <p className='display-5'>Registration for Course Enroll</p>
                        <input placeholder='Name' type='text' className='form-control mt-2'/>
                        <input placeholder='Email' type='text' className='form-control mt-2'/>
                        <input placeholder='Phone' type='text' className='form-control mt-2'/>
                        <select name="course" id="course" className='form-control mt-2 mb-2'>
                          <option value="">Course Name</option>
                          <option value="course1">Course1</option>
                          <option value="course2">Course2</option>
                          <option value="course3">Course3</option>
                         <option value="course4">Course4</option>
                        </select>
                        <Button variant='primary' className='mx-auto mt-2 px-5' style={{width:"100%"}}>Apply</Button>
                    </fieldset>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
