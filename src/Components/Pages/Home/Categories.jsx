import React,{useState} from 'react'
const Categories = (props) => {
      const category =(props.category);
  return (
    <div className=' p-2 mt-4 py-3'>
          <h2 className='text-center text-capitalize'>Choose from top visited  </h2>
        <h2 className='text-center text-capitalize'>categories you may like</h2>
        <p className='text-center text-capitalize'>Create custom landing pages with rareblocks that <br/>converts more than anywhere</p>
            <div className='d-flex flex-wrap justify-content-evenly px-5 mt-4'>
                {category.map((elem,index)=>{
                    return(
                <div className='card col-sm-3 mt-2 px-3 border-0 rounded-0' key={index}>
                    <img className="card-img-top rounded-0" src='Images/Home_bg.jpg' alt='person' height="250px"/>
                    <div className='card-body'>
                        <p className='card-text fw-bolder'>{elem}</p>
                    </div>
                </div>
                    )
                })}
            </div>
        </div>
  )
}

export default Categories
