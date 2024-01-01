import React, { useEffect, useState } from 'react'
import { CiBookmark } from "react-icons/ci";
import { Accordion,Card,Button,Tabs,Tab } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
const CourseDescription = () => {
  const[key,setKey]=useState("overview");
  const data=useLocation().state;
  useEffect(()=>{
    console.log(data);
  },[]);
  return (
    <>
      <div className="card mb-5 p-3 bg-primary w-100 rounded-0 text-capitalize">
        <div className='col-md-6 mx-4'>
          <div className='d-flex justify-content-between'>
          <div className='d-flex'>
            <div className='w-auto h-auto rounded-circle p-1 overflow-hidden'>
              <img src='../Images/Home_bg.jpg' alt='instructor' width="80px" height="80px" className='rounded-circle'/>
            </div>
            <div className='py-3'>
              <p className='text-white fs-6 fw-light lh-1 m-0'>instructor</p>
              <p className='text-white fs-5 lh-1 m-0'>{data.instructor.name}</p>
            </div>
          </div>
          <div className='d-flex'>
            <div className='w-auto h-auto rounded-circle p-1 overflow-hidden'>
              <CiBookmark style={{width:"50px", height:"50px"}}/>
            </div>
            <div className='py-3'>
              <p className='text-white fs-6 fw-light lh-1 m-0'>category</p>
              <p className='text-white fs-5 lh-1 m-0'>{data.category}</p>
            </div>
          </div>

          </div>
          <h1 className='my-5 text-white text-capitalize border-bottom border-white pb-4'>computer science and security</h1>
          <div className='d-flex justify-content-between text-white my-4'>
            <div>
              <span><span className='fw-bold'>Time. </span>{data.time}</span>
            </div>
            <div>
              <span> <span className='fw-bold'>Level. </span>{data.level}</span>
            </div>
            <div>
              <span><span className='fw-bold'>Lessons. </span>{data.lessons}</span>
            </div>
            <div>
              <span><span className='fw-bold'>Quizes. </span>{data.quizes}</span>
            </div>
            <div>
              <span><span className='fw-bold'>Students. </span>{data.students}</span>
            </div>
          </div>
        </div>
      </div>
  <div className='d-flex justify-content-evenly position-relative flex-wrap'>
  <div className='w-70'>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Requirements </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Features </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='2'>
        <Accordion.Header>Audience</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime odio cum eveniet esse doloremque, eligendi quidem culpa sed. Repudiandae, deleniti veritatis delectus illum ratione voluptates, harum quam sunt maxime totam inventore? Vitae necessitatibus asperiores, ratione voluptates in voluptate culpa perspiciatis.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
         <Card className='col-md-3 p-2 sticky-middle'>
      <Card.Img variant="top" src="../Images/Home_bg.jpg" />
      <Card.Body>
        <Card.Text className='text-center'>price &#8377;  {data.price} </Card.Text>
        <Button variant="dark" className='w-100'>Buy now</Button>
      </Card.Body>
    </Card>
    </div>
       
    <div className='w-auto'>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 p-2 fw-bold text-white w-70"
      
    >
      <Tab eventKey="overview" title="Overview" className='w-70 p-4'>
        {data.overview}
      </Tab>
      <Tab eventKey="curriculum" title="Curriculum" className='w-70 p-4'>
        {data.course.map((elem,index)=>{
            return (
              <>
              <Accordion>
                <Accordion.Item eventKey={index} key={index} className='my-2'>
                  <Accordion.Header>{elem.category}</Accordion.Header>
                  <Accordion.Body>
                    {elem.lectures.map((elem,index)=>{
                      return(
                        <div className='d-flex justify-content-between' key={index}>
                          <Link>{elem.name}</Link>
                          <p>{elem.duration}</p>
                        </div>
                      )
                    })}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </>
            )
        })}
      </Tab>
      <Tab eventKey="instructor" title="Instructor" className='w-70 p-4'>
        <p>{data.instructor.name}</p>
        <p>{data.instructor.experience}</p>
        <p>{data.instructor.details}</p>
      </Tab>
    </Tabs>
    </div>
    </>
  )
}

export default CourseDescription
