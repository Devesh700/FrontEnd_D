import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const instructorsData = [
  {
    id: 1,
    name: 'John Doe',
    classification: 'Senior Instructor',
    classes: ['Class 6', 'Class 8'],
    subjects: ['Mathematics', 'Physics'],
    description: 'Experienced educator with a focus on STEM subjects.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    classification: 'Junior Instructor',
    classes: ['Class 7', 'Class 8'],
    subjects: ['English', 'History'],
    description: 'Passionate about literature and history education.',
  },
  // Add more instructors as needed
];

const InstructorList = () => {
  const [filterClass, setFilterClass] = useState('');
  const [filterSubject, setFilterSubject] = useState('');

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
          <option value="Class 6">Class 6</option>
          <option value="Class 7">Class 7</option>
          <option value="Class 8">Class 8</option>
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
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="English">English</option>
          <option value="History">History</option>
        </select>
      </div>
      <div className="row">
        {filteredInstructors.map((instructor) => (
          <div key={instructor.id} className="col-md-4 mb-4">
            <div className="card">
                <img className='card-img-top rounded-circle' src='https://tse2.mm.bing.net/th?id=OIP.xzCeheJTN-rREhIpcqKE6QHaIJ&pid=Api&P=0&h=180' height="200px"/>
              <div className="card-body">
                <h5 className="card-title">{instructor.name}</h5>
                <p className="card-text">
                  <strong>Classification:</strong> {instructor.classification}
                </p>
                <p className="card-text">
                  <strong>Classes:</strong> {instructor.classes.join(', ')}
                </p>
                <p className="card-text">
                  <strong>Subjects:</strong> {instructor.subjects.join(', ')}
                </p>
                <p className="card-text">
                  <strong>Description:</strong> {instructor.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorList;
