import { Button, Container, NavDropdown, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SubjectData from '../../SubjectData';
import { useEffect, useState } from 'react';

function NavScrollExample() {
  const [Client,setClient]=useState({fullname:""});
  const navigate = useNavigate();
  const [showdropdown, setdropdown] = useState(false);
  const handlemouseenter = (e) => {
    setdropdown(() => true);
  }
  const logOut=()=>{
    window.localStorage.removeItem("auth-token");
    window.localStorage.removeItem("client");
    window.localStorage.removeItem("user-email");
    navigate('/');
  }
  const handlemouseleave = (e) => {
    setdropdown(() => false);
  }
  useEffect(()=>{
    fetchuser();
  },[])
   const fetchuser=async()=>{
     let email=window.localStorage.getItem("user-email");
    let token=window.localStorage.getItem("auth-token");
    let client=window.localStorage.getItem("client");
    const data={
      email:email,
      token:token,
      client:client
    }
      try{
        const res=await fetch("http://localhost:4000/senddata",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      const result=await res.json();
      setClient(result);
    }
      catch(err){
    console.log(err);
   }
   }

  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3" sticky="top">
      <Container fluid className=' justify-content-around'>
        <Link to={"/"} className=' text-decoration-none'><Navbar.Brand className='fs-3'>EduLite</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={"/"} className=' text-decoration-none mx-2 fs-5 nav-link mb-0'>Home</Link>
            <NavDropdown title="Online Classes"
              id="navbarScrollingDropdown"
              className='mx-2 fs-5'
              show={showdropdown}
              onMouseEnter={handlemouseenter} onMouseLeave={handlemouseleave}>
              {SubjectData.map((elem, index) => {
                let cls = "class " + elem.class
                return (
                  <div key={index}>
                    <NavDropdown.Item key={index} 
                    onClick={()=>navigate("/instructors",{state:{class:elem.class,mode:"online"}})}
                    >{cls}</NavDropdown.Item>
                  </div>
                );
              })}
            </NavDropdown>

            <p className=' text-decoration-none mx-2 fs-5 nav-link mb-0 text-capitalize'
               onClick={()=>navigate("/instructors",{state:{mode:"tution"}})}
            >tution</p>
            <Link to={"/courses"} className=' text-decoration-none mx-2 fs-5 nav-link mb-0'>IT Courses</Link>
          </Nav>
          <div className="d-flex align-items-center">
            {localStorage.getItem("auth-token")?
            <div className='position-realative client-image'>
                  <img src={Client.profile} width="40px" height="40px" className='rounded-circle ' alt='profile'/>
                  {/* {Client.fullname} */}
                    <div className='dropdown-box'>
                      <p className='p-0 w-100'>{Client.fullname}</p>
                      <ul>
                        <li>Name- {Client.fullname}</li>
                        <li>Email- {Client.email}</li>
                        <li>Phone- {Client.phone}</li>
                        <li><button className='btn btn-outline-info'
                        onClick={()=>{navigate("/profile",{state:Client})}}>your profile</button></li>
                      </ul>
                      
                      <button className='btn btn-outline-danger' onClick={logOut}>log out</button>
                    </div>
                </div>:
            <><Link to="/login"><Button variant="outline-success">Log in</Button></Link></>}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;