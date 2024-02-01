import React, { useState } from 'react'
import { Tab,Tabs } from 'react-bootstrap';
import "./Instructor.css";
import { useLocation } from 'react-router-dom';

const InstructorDetail = () => {
  const instructor=useLocation().state;
  const [key,setkey]=useState("Introduction");
  return (
    <div className='d-flex flex-wrap'>
      <div className='px-2 w-70'>
        <div className='card shadow-1 mb-3 w-100 d-flex flex-wrap flex-row'>
        <img src={instructor.profile} alt='tutor' className='col-ssm-2'/>
        <div className='card-body'>
            <span className='float-end'>starting from <br/> &#8377;{instructor.fees!==null?instructor.fees:1200}</span>
            <p className='card-title'> {instructor.fullname!==null?instructor.fullname:"name"}</p>
            <p className='card-text'>{instructor.tagline!==undefined?instructor.tagline:"Think once, Think twice, Think technology"}</p>
            <p>⭐ 5.0/5.0 (06) &nbsp; ✅ 100% profile completion </p>
            <p className='fw-light'>languages i know</p>
            <p className='border-bottom pb-3'>{instructor.languages.length!==0?instructor.languages:"english , hindi"}</p>
            <button className='btn btn-primary float-end px-5 py-2'>Book Tution</button>
        </div>
      </div>
      <div className='card shadow-1 instructor'>
        <Tabs activeKey={key} onSelect={(k) => setkey(k)} className='w-100 mb-2'>
                        <Tab eventKey="Introduction" title="Introduction" className='w-100 px-4 py-3'>
                          <h3>Introduction</h3>
                          {instructor.description!==undefined?instructor.description:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. Sed ut perspiciatis unde omnis iste natus error sit voluptatem antium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."}
<h3>Education</h3>
<h4>Graduation</h4>
<p className='fw-light'>
  <span>{instructor.graduation.course} &emsp;</span>
  <span>{instructor.graduation.stream} &emsp;</span>
  <span>from date to date &emsp;</span>
</p>
<h3>I can Teach</h3>
<p><span className='fs-5'>Subjects: </span><span>{instructor.subjects} &emsp;</span></p>
<p><span className='fs-5'>Classes: </span><span>{instructor.classes} &emsp;</span></p>
<h3>availability</h3>
<p>Mon-Sat</p>
<p>Mode - Online, Tution</p>
                        </Tab>
                        <Tab eventKey="Review" title="Review">IT</Tab>
                        {/* <Tab eventKey="Classes" title="class 6 - class 12">class 6 - class 12</Tab> */}
                    </Tabs>
      </div>
      </div>
      <div className='w-30 px-4 pb-0'>
        <div className='card shadow-1 mb-3 p-4'>
          
        <h3>Contact Details</h3>
        <div className='d-flex flex-column'>
          <p>phone- 1234567890</p>
          <p>whatsapp- 1234567890</p>
          <p>facebook- asc******</p>
          <p>twitter- cnkdsn ****</p>
          <p>instagram- cnkdsn ****</p>
          <p>gmail- cnkdsn ****gmail.com</p>
          <p>phone- 1234567890</p>
          <p>phone- 1234567890</p>
          <p>phone- 1234567890</p>
          <p>phone- 1234567890</p>
        </div>
      
        </div>
      </div>
    </div>
  )
}

export default InstructorDetail
