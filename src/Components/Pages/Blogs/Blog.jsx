import React from 'react'
import "./Blog.css";

const Blog = () => {
  return (
    <>
      <div className='blog-main p-2 mt-4'>
        <h2 className='text-center'>Latest from our blog</h2>
        <p className='text-center'>Create custom landing pages with rareblocks that <br/>converts more than anywhere</p>
        <div className='nt-4'>
            <div className='d-flex flex-wrap justify-content-evenly px-5'>
                <div className='card blogs-card mt-2'>
                    <img className="card-img-top" src='Images/Home_bg.jpg' alt='person'/>
                    <div className='card-body'>
                        <p className='card-text'>how a visual artist redefine success in graphic design</p>
                    </div>
                </div>
                <div className='card blogs-card mt-2'>
                    <img className="card-img-top" src='Images/Home_bg.jpg' alt='person'/>
                    <div className='card-body'>
                        <p className='card-text'>how a visual artist redefine success in graphic design</p>
                    </div>
                </div>
                <div className='card blogs-card mt-2'>
                    <img className="card-img-top" src='Images/Home_bg.jpg' alt='person'/>
                    <div className='card-body'>
                        <p className='card-text'>how a visual artist redefine success in graphic design</p>
                    </div>
                </div>
                <div className='card blogs-card mt-2'>
                    <img className="card-img-top" src='Images/Home_bg.jpg' alt='person'/>
                    <div className='card-body'>
                        <p className='card-text'>how a visual artist redefine success in graphic design</p>
                    </div>
                </div>
                <div className='card blogs-card mt-2'>
                    <img className="card-img-top" src='Images/Home_bg.jpg' alt='person'/>
                    <div className='card-body'>
                        <p className='card-text'>how a visual artist redefine success in graphic design</p>
                    </div>
                </div>
                <div className='card blogs-card mt-2'>
                    <img className="card-img-top" src='Images/Home_bg.jpg' alt='person'/>
                    <div className='card-body'>
                        <p className='card-text'>how a visual artist redefine success in graphic design</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Blog;
