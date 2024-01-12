import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <>
      <div className='bg-hero'>
        <div className='bg-overlay d-flex justify-content-center align-items-center flex-column p-5 text-white'>
             <h1 className=' mt-5 text-capitalize fw-bold fs-1'>Transforming education <br/>through E-learning</h1>
            <p className='col-md-6'>Experience personalized, interactive learning from the comfort of your home. Enhance knowledge, build skills, and achieve remarkable academic progress with us. </p>
            <Link to="/register"><Button className='p-3 fw-bold btn-community rounded-5'> Join Our Learning Community</Button></Link>{''}
        </div>
        </div>
    </>
  )
}

export default Hero;
