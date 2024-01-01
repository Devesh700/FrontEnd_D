import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const naviagte=useNavigate();
  return (
    <>
      <div className='d-flex flex-wrap justify-content-center p-2'>
        <div className='col-md-6'>
            <div className='rounded-1 overflow-hidden d-grid'>
                <img src='Images/Home_bg.jpg' width="100px" height="100px" alt='profile' className='profile-image rounded-1 mx-auto'/>
            </div>
            <form>
                <fieldset>
                    <div className='form-group'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input type='text' className='form-control' value={"devesh mishra"} name='name' id='name'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone' className='form-label'>Name</label>
                        <input type='text' className='form-control' value={"1234567890"} name='phone' id="phone" disabled/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pin-code' className='form-label'>Name</label>
                        <input type='pin code' className='form-control' value={"123454"} name='pin-code' id='pin-code'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='street-address' className='form-label'>street address</label>
                        <input type='text' className='form-control' value={""} name='street-address' id='street-address'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='landmark' className='form-label'>landmark</label>
                        <input type='text' className='form-control' value={"devesh mishra"} name='landmark' id='landmark'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city' className='form-label'>city</label>
                        <input type='text' className='form-control' value={"devesh mishra"} name='city' id='city'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state' className='form-label'>state</label>
                        <input type='text' className='form-control' value={"devesh mishra"} name='state'  id='state'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='username' className='form-label'>username</label>
                        <input type='text' className='form-control' value={"devesh mishra"} name='username' id='username'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email' className='form-label'>email address</label>
                        <input type='email' className='form-control' value={"devesh mishra"} name='email' id='email' disabled/>
                    </div>
                    <Button variant='danger' className='w-100 my-5'>Update Account Details</Button>
                </fieldset>
            </form>
        </div>
        <div className='col-md-4 p-5'>
            <h1 className='fs-1 fw-light mb-5'>Courses Enrolled</h1>
            <div className=' card tutor-card m-2 w-100' >
          <img className=' card-img-top' src='Images/Home_bg.jpg' alt='tutor'/>
          <div className='card-body'>
            <p className='text-success'>elem.instructor.name</p>
            <h4 className='card-title '>elem.name</h4>
            <p className=''>&#8377; elem.price</p>
          </div>
            <Button variant="primary" className=' rounded-0' onClick={()=>naviagte("coursedescription",{})}>view more</Button>
        </div>      
        </div>
      </div>
    </>
  )
}

export default Profile
