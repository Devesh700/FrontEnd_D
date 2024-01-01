import React from 'react'
// import { Link } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='w-100 bg-dark d-flex flex-wrap justify-content-center gap-3 text-capitalize'>
        <div className='col-sm-3'>
            <p className='text-white my-4 fw-semibold'> explore us</p>
            <p><Link>Teachshala</Link></p>
            <p><Link>online courses</Link></p>
            <p><Link>tution</Link></p>
            <p><Link>IT courses</Link></p>
            <p><Link>Become a mentor</Link></p>
        </div>
        <div className='col-sm-3'>
            <p className='text-white my-4 fw-semibold'> Pages</p>
            <p><Link>Home</Link></p>
            <p><Link>Blogs</Link></p>
            <p><Link>Contact us</Link></p>
            <p><Link>Next scheduled</Link></p>
            <p><Link>your profie</Link></p>
        </div>
        <div className='col-sm-3'>
            <p className='text-white my-4 fw-semibold'> follow us on</p>
            <p><Link>you tube</Link></p>
            <p><Link>linkedln</Link></p>
            <p><Link>instagram</Link></p>
            <p><Link>twitter</Link></p>
            <p><Link>facebook</Link></p>
        </div>
      </footer>
    </>
  )
}

export default Footer
