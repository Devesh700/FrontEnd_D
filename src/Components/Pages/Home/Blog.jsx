import React from 'react'
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <div className='blog-main p-2 mt-4 py-5'>
        <p className='text-center fs-4'>our featured instructors</p>
        <h2 className='text-center text-capitalize'>Every Instructor is </h2>
        <h2 className='text-center text-capitalize'>professional and high qualified</h2>
        <p className='text-center text-capitalize'>Create custom landing pages with rareblocks that <br/>converts more than anywhere</p>
        <div className='mt-4'>
            <div className='d-flex flex-wrap justify-content-evenly px-5'>
                <div className='card blogs-card mt-2'>
                    <img className="card-img-top" src='Images/Home_bg.jpg' alt='person'/>
                    <div className='card-body'>
                        <p className='card-text'>Instructor name</p>
                        <div className='d-flex justify-content-between'>
                            <p>starting from</p>
                            <p className="fw-bold">&#8377; 100/hr</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>phone</p>
                            <p className='fw-bold'>1234567889</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>whatsapp</p>
                            <p className="fw-bold">1234567890</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Qualifications</p>
                            <p className="fw-bold">B. Tech</p>
                        </div>
                    </div>
                </div>
                <div className='card blogs-card mt-2'>
                    <img className="card-img-top" src='Images/Home_bg.jpg' alt='person'/>
                    <div className='card-body'>
                        <p className='card-text'>Instructor name</p>
                        <div className='d-flex justify-content-between'>
                            <p>starting from</p>
                            <p className="fw-bold">&#8377; 100/hr</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>phone</p>
                            <p className='fw-bold'>1234567889</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>whatsapp</p>
                            <p className="fw-bold">1234567890</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Qualifications</p>
                            <p className="fw-bold">B. Tech</p>
                        </div>
                    </div>
                </div>
                <div className='card blogs-card mt-2'>
                    <img className="card-img-top" src='Images/Home_bg.jpg' alt='person'/>
                    <div className='card-body'>
                        <p className='card-text'>Instructor name</p>
                        <div className='d-flex justify-content-between'>
                            <p>starting from</p>
                            <p className="fw-bold">&#8377; 100/hr</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>phone</p>
                            <p className='fw-bold'>1234567889</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>whatsapp</p>
                            <p className="fw-bold">1234567890</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Qualifications</p>
                            <p className="fw-bold">B. Tech</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Blog;
