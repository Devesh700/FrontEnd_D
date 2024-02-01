import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const InstructorList = () => {
    const [instructorsData,setinstructors]=useState([])
  const data=useLocation().state;
  const navigate=useNavigate();
  const [filterClass, setFilterClass] = useState(data.class===undefined?'':data.class);
  const [filterSubject, setFilterSubject] = useState('');
  useEffect(()=>{
    fetchall();
  },[])
  const fetchall=async()=>{
    const res=await fetch("http://localhost:4000/teachers",{
      method:"GET"
    })
    let result=await res.json();
    console.log(result)
    result=result.filter(user=>user.modes.includes(data.mode));
    setinstructors(result);
    console.log(result);

  }

  const handleClassFilterChange = (e) => {
    setFilterClass(e.target.value);
  };

  const handleSubjectFilterChange = (e) => {
    setFilterSubject(e.target.value);
  };

  const filteredInstructors = instructorsData.filter((instructor) => {
    const classFilter =
      filterClass === '' || instructor.classes.includes(filterClass);

    const subjectFilter =
      filterSubject === '' || instructor.subjects.includes(filterSubject);

    return classFilter && subjectFilter;
  });

  return (

    // FILTERS

    <div className="container mt-4">
      <h2 className="mb-4">Instructors</h2>
      <div className="mb-3">
        <label htmlFor="classFilter" className="form-label">
          Filter by Class:
        </label>
        <select
          id="classFilter"
          className="form-select"
          value={filterClass}
          onChange={handleClassFilterChange}
        >
          <option value="">All</option>
          <option value="6">Class 6</option>
          <option value="7">Class 7</option>
          <option value="8">Class 8</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
          <option value="12">Class 12</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="subjectFilter" className="form-label">
          Filter by Subject:
        </label>
        <select
          id="subjectFilter"
          className="form-select"
          value={filterSubject}
          onChange={handleSubjectFilterChange}
        >
          <option value="">All</option>
          <option value="Math">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="English">English</option>
          <option value="History">History</option>
        </select>
      </div>

      {/* INSTRUCTOR CARDS */}

      <div className="row">

        {filteredInstructors.map((instructor) => {
          console.log(instructor);
          return (
          
          <div key={instructor.id} className="col-md-4 mb-4" onClick={()=>navigate("detail",{state:instructor})}>
            <div className="card card-scroll h-400 overflow-y-scroll">
                <img className='mx-auto rounded-circle' src={instructor.profile} height="200px" width={"200px"}/>
              <div className="card-body">
                <h5 className="card-title">{instructor.fullname}</h5>
                <p className="card-text">
                  <strong>Classification:</strong> {instructor.classification}
                </p>
                <p className="card-text">
                  <strong>Classes:</strong> {instructor.classes.join(',')}
                </p>
                <p className="card-text">
                  <strong>Subjects:</strong> {instructor.subjects.join(',')}
                </p>
                <p className="card-text">
                  <strong>Description:</strong> {instructor.description}
                </p>
              </div>
            </div>
          </div>
        
        )})}
      </div>
    </div>
  );
};

export default InstructorList;
