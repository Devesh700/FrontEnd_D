import React from 'react'

const HomeSecondary = () => {
  return (
    <>
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
    </>
  )
}

export default HomeSecondary
