import { Button, Container, NavDropdown, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SubjectData from '../../SubjectData';
import { useState } from 'react';

function NavScrollExample() {
  const navigate = useNavigate();
  const [showdropdown, setdropdown] = useState(false);
  const handlemouseenter = (e) => {
    setdropdown(() => true);
  }
  const handlemouseleave = (e) => {
    setdropdown(() => false);
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-3" sticky="top">
      <Container fluid className=' justify-content-around'>
        <Link to={"/"} className=' text-decoration-none'><Navbar.Brand className='fs-3'>EduLite</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={"/"} className=' text-decoration-none mx-2 fs-5'><Nav.Link href="#action1">Home</Nav.Link></Link>
            <NavDropdown title="Online Classes"
              id="navbarScrollingDropdown"
              className='mx-2 fs-5'
              show={showdropdown}
              onMouseEnter={handlemouseenter} onMouseLeave={handlemouseleave}>
              {SubjectData.map((elem, index) => {
                let cls = "class " + elem.class
                return (
                  <>
                    <NavDropdown title={cls} className='dropend fs-5' key={index}>
                      {elem.subjects.map((val, index) => {  // Fix here: Change elem.subject to elem.subjects
                        return (
                          <>
                            <NavDropdown.Item key={index}>{val}</NavDropdown.Item>
                          </>
                        );
                      })}
                    </NavDropdown>
                    <NavDropdown.Divider />
                  </>
                );
              })}
            </NavDropdown>

            <NavDropdown title="Tution" id="navbarScrollingDropdown" className='mx-2 fs-5'>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="IT Courses" id="navbarScrollingDropdown" className='mx-2 fs-5'>
              <Link to={"/Courses"} className=' text-decoration-none'><NavDropdown.Item href="#action3">Course List</NavDropdown.Item></Link>
              <NavDropdown.Item href="#action3">Course Detail</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Course Category</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Lessons</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex">
            <Link to="/login"><Button variant="outline-success">Log in</Button></Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;