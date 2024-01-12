import React, { useState } from 'react'
import { Card, Tab, Tabs, Button } from 'react-bootstrap';
import "./Categories.css"
import { useLocation } from 'react-router-dom';
const Scheduled = () => {
    const category = useLocation().state;
    const [key, setkey] = useState("all");
    return (
        <>
            <div className='scheduled bg-info p-3'>
                <div className='col-md-6 p-4 mx-auto'>
                    <h2>Be with our upcoming scheduled live classes to boost your learning</h2>
                </div>
                <div className=''>
                    <Tabs activeKey={key} onSelect={(k) => setkey(k)} className='w-100 mb-2'>
                        <Tab eventKey="all" title="All" className='w-100 bg-info'>
                            <div className='d-flex flex-wrap gap-3 p-2 justify-content-evenly'>
                                {category.map((elem, index) => {
                                    return (
                                        <Card className='col-md-3' key={index}>
                                            <Card.Img variant="top" src="Images/Home_bg.jpg" height="250px"/>
                                            <Card.Body>
                                                <Card.Title>{elem}</Card.Title>
                                                
                                            </Card.Body>
                                        </Card>
                                    )
                                })}
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
