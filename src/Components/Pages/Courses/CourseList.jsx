import React, { useEffect, useState } from 'react'
import "./Courses.css";
import { Button } from 'react-bootstrap';
import CourseData from './CourseData';
import { useNavigate } from 'react-router-dom';
const CourseList = () => {
  const [category,setcategory] =useState([...new Set(CourseData.map((elem) => elem.category))]);
  const [filteredData,setfilteredData]=useState(CourseData);
  const [searchValue,setsearchValue]=useState('');
  useEffect(()=>{
    console.log(category);
  },[]);
  const handleSearchvalue=(e)=>{
    setsearchValue(e.target.value,()=>handleSearch());
  }
  const handleSearch=(e)=>{try{
      let val=new RegExp(`\\b${searchValue}`, 'i')
      let data=CourseData.filter((elem,index)=>{
        return val.test(elem.category);
      })
       setfilteredData(data, () => {
    console.log(val);
    console.log(CourseData);
  });
  }
  catch(err){
    alert("error ")
  }}
  const naviagte=useNavigate();
  return (
    <>
      <div className='courselist-main p-4 mt-4'>
        <div className='d-flex justify-content-between flex-wrap'>
          <h2>All Courses</h2>
          <div>
            <input type='search' placeholder='search courses...' className='border-0 form-control border-bottom' name='search-courses' list='courselist' onChange={handleSearchvalue} value={searchValue} onKeyDown={handleSearch}/>
            <datalist id='courselist'>
              {category.map((elem,index)=>{
                return (
                  <>
                    <option value={elem} key={index}>{elem}</option> 
                  </>
                )
              })}
            </datalist>
          </div>
        </div>
        <div className='d-flex justify-content-start flex-wrap gap-3 mt-5'>
          {filteredData.map((elem,index)=>{
            return(
              <>
                <div className=' card tutor-card m-2' style={{width:"250px"}} key={index}>
          <img className=' card-img-top' src='Images/Home_bg.jpg' alt='tutor'/>
          <div className='card-body'>
            <p className='text-success'>{elem.instructor.name}</p>
            <h4 className='card-title '>{elem.name}</h4>
            <p className=''>&#8377; {elem.price}</p>
          </div>
            <Button variant="primary" className=' rounded-0' onClick={()=>naviagte("coursedescription",{state:elem})}>view more</Button>
        </div>      
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default CourseList
