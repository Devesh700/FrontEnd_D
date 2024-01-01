import React, { useState } from 'react'
import { Card, Tab, Tabs,Button } from 'react-bootstrap';
import "./Scheduled.css"
const Scheduled = () => {
    const [key,setkey]=useState("all");
  return (
    <>
      <div className='scheduled bg-info p-3'>
       <div className='col-md-6 p-4 mx-auto'>
        <h2>Be with our upcoming scheduled live classes to boost your learning</h2>
       </div>
       <div className=''>
        <Tabs activeKey={key} onSelect={(k)=>setkey(k)} className='w-100 mb-2'>
            <Tab eventKey="all" title="All" className='w-100 bg-info'>
                <div className='d-flex flex-wrap gap-3 p-2 justify-content-evenly'>
                <Card className='col-md-3'>
                    <Card.Img variant="top" src="Images/Home_bg.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            start: 11/01/2024 8:00:00 pm<br/>
                            end: 11/01/2024 11:00:00 pm
                        </Card.Text>
                        <Button variant="primary" className='float-end'>register now</Button>
                    </Card.Body>
                </Card>
                <Card className='col-md-3'>
                    <Card.Img variant="top" src="Images/Home_bg.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            start: 11/01/2024 8:00:00 pm<br/>
                            end: 11/01/2024 11:00:00 pm
                        </Card.Text>
                        <Button variant="primary" className='float-end'>register now</Button>
                    </Card.Body>
                </Card>
                <Card className='col-md-3'>
                    <Card.Img variant="top" src="Images/Home_bg.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            start: 11/01/2024 8:00:00 pm<br/>
                            end: 11/01/2024 11:00:00 pm
                        </Card.Text>
                        <Button variant="primary" className='float-end'>register now</Button>
                    </Card.Body>
                </Card>
                <Card className='col-md-3'>
                    <Card.Img variant="top" src="Images/Home_bg.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            start: 11/01/2024 8:00:00 pm<br/>
                            end: 11/01/2024 11:00:00 pm
                        </Card.Text>
                        <Button variant="primary" className='float-end'>register now</Button>
                    </Card.Body>
                </Card>
                </div>
            </Tab>
            <Tab eventKey="IT" title="IT">IT</Tab>
            <Tab eventKey="Classes" title="class 6 - class 12">class 6 - class 12</Tab>
        </Tabs>
       </div>
      </div>
    </>
  )
}

export default Scheduled;
