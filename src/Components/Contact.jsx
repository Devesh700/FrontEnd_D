import React from 'react'
import { Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
      <div className="Contact-main bg-info p-4">
        <div className='disclaimer'>
            <p className='text-capitalize text-center display-6'>Stay aware with our weekly News Letter</p>
            <p className='fw-bolder display-2 text-center text-secondary text-capitalize'>hop on the learning</p>
            <p className='fw-bolder display-2 text-center text-secondary text-capitalize'>bandwagon today</p>
        </div>
        <div className='d-flex flex-wrap justify-content-evenly px-2'>
            <div className='card' style={{width:"300px", maxWidth:"100%"}}>
                <img src='' alt='news' width="100%" height="100%"/>
            </div>
            <div>
                <p className=''>get the latest in advamcements, even Notifications special </p>
                <p className=''>discounts on courses, and personalized learning tips straight to your inbox</p>
                <form style={{width:"300px"}}>
                    <input className='form-control mt-3' type='text' placeholder='Name'/>
                    <input className='form-control mt-3' type='email' placeholder='Email'/>
                    <Button variant='danger' className='px-3 text-capitalize mt-3 w-75 rounded-4 fs-5'>subscribe to our newsletter</Button>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
