import React from 'react'
// import { Link } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Partials.css"

const Footer = () => {
  return (
    <>
      <footer className='w-100 bg-footer d-flex flex-wrap justify-content-around gap-3 text-capitalize py-4'>
        <ul className='col-sm-3'>
            <p className='text-white my-4 fw-semibold'> useful links</p>
            <li className=' lh-lg'><Link>About</Link></li>
            <li className=' lh-lg'><Link>Join our Community</Link></li>
            <li className=' lh-lg'><Link>lirograms & Degrees</Link></li>
            <li className=' lh-lg'><Link>F.A.Q</Link></li>
        </ul>
        <ul className='col-sm-3'>
            <p className='text-white my-4 fw-semibold'> pages</p>
            <li className=' lh-lg'><Link>Home</Link></li>
            <li className=' lh-lg'><Link>Success story</Link></li>
            <li className=' lh-lg'><Link>Courses</Link></li>
            <li className=' lh-lg'><Link>sign in now</Link></li>
        </ul>
        <ul className='col-sm-3'>
            <p className='text-white my-4 fw-semibold'> follow us on</p>
            <li className=' lh-lg'><Link>you tube</Link></li>
            <li className=' lh-lg'><Link>linkedln</Link></li>
            <li className=' lh-lg'><Link>instagram</Link></li>
            <li className=' lh-lg'><Link>twitter</Link></li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
