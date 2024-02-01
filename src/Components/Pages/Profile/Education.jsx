import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Education = (data) => {
 const naviagte=useNavigate();
    const[user,setuser]=useState({...data.user})
    const [enable,setenable]=useState();
    let modes=[];
    let language=[];
    const client=window.localStorage.getItem('client');
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setuser((pre)=>{return {...pre,[name]:value}});
    }

  const handleChange2 = (e) => {
  if (e.target.checked) {
    language.push(e.target.id);
  } else {
    language=language.filter(lang => lang !== e.target.id);
  }
  alert(language);
  setuser(prevUser => ({ ...prevUser, languages: language }));
};

  const handleChange3=(e)=>{
    if(e.target.checked){
      modes.push(e.target.id);
      user.modes=modes;
      console.log(user);
    }
    else{
      modes=modes.filter(lang=>lang!==e.target.id)
      user.modes=modes;
      console.log(user);
    }
  }

  const handleChangegraduation=(e)=>{

   const { name, value } = e.target;
    setuser((prevUser) => ({
      ...prevUser,
      graduation: {
        ...prevUser.graduation,
        [name]: value,
      },
    }));
    // alert(user.graduation.course);
  };
  const handleChangepostgraduation=(e)=>{

   const { name, value } = e.target;
    setuser((prevUser) => ({
      ...prevUser,
      postgraduation: {
        ...prevUser.postgraduation,
        [name]: value,
      },
    }));
    // alert(user.postgraduation.course);
  };


    const handleSubmit=async (e)=>{
       const languagesKnown = ['hindi', 'english', 'tamil', 'marathi', 'urdu', 'kannada'];
    const selectedLanguages = languagesKnown.filter(lang => document.getElementById(lang).checked);
    setuser(prevUser => ({ ...prevUser, languages: selectedLanguages }));
        console.log(user);
        const res=await fetch(`http://localhost:4000/update${client}`,{
            method:"POST",
            body:JSON.stringify(user),
            headers:{"Content-Type":"application/json"}
        });
        const result=await res.json();
        if(result){
        // console.log(await res.json());
        alert("successfully updated");
        naviagte("/profile",{state:user});
        }
        else{
            alert(result);
        } 
    }
  return (
    <div className='p-2'>
      <h4 className='border-bottom pb-3'>Education Details</h4>
      <form >
        <div className="form-group px-md-5 ">

          {/* LANGUAGES START */}
                <label className='form-label'>Languages Known</label>
                <div className="d-flex flex-wrap w-md-45">
                  <div className='d-flex'>
                    <input disabled={!enable} 
                     type='checkbox' 
                     checked={user.languages.includes("hindi")}
                      className='form-check m-2' id="hindi" 
                     onChange={handleChange2}
                     /> <label htmlFor='hindi'
                   className='m-2 form-label'>hindi</label>
                  </div>
                  <div className='d-flex'>
                    <input disabled={!enable}
                     type='checkbox' 
                     checked={user.languages.includes("english")}
                      className='form-check m-2' id="english" 
                     onChange={handleChange2}
                     /> <label htmlFor='english'
                   className='m-2 form-label'>English</label>
                  </div>
                  <div className='d-flex'>
                    <input disabled={!enable}
                     type='checkbox' 
                     checked={user.languages.includes("tamil")}
                      className='form-check m-2' id="tamil"
                     onChange={handleChange2}
                     /> <label htmlFor='tamil'
                   className='m-2 form-label'>tamil</label>
                  </div>
                  <div className='d-flex'>
                    <input disabled={!enable}
                     type='checkbox' 
                     checked={user.languages.includes("marathi")}
                      className='form-check m-2' id="marathi"
                     onChange={handleChange2}
                     /> <label htmlFor='marathi'
                   className='m-2 form-label'>marathi</label>
                  </div>
                  <div className='d-flex'>
                    <input disabled={!enable}
                     type='checkbox' 
                     checked={user.languages.includes("urdu")}
                      className='form-check m-2' id="urdu"
                     onChange={handleChange2}
                     /> <label htmlFor='urdu'
                   className='m-2 form-label'>urdu</label>
                  </div>
                  <div className='d-flex'>
                    <input disabled={!enable}
                     type='checkbox' 
                     checked={user.languages.includes("kannada")}
                      className='form-check m-2' id="kannada"
                     onChange={handleChange2}
                     /> <label htmlFor='kannada'
                   className='m-2 form-label'>kannada</label>
                  </div>
                </div>
            </div>

            {/* LANGUAGES END */}

            <h4 className='mt-3'>Graduation</h4>

            <div className="form-group">
              <label className='form-label'>Course</label>
              <input disabled={!enable} 
              onChange={handleChangegraduation} 
              value={user.graduation.course} 
              name="course"
              type='text' 
              className='form-control'/>
            </div>
            <div className="form-group">
              <label className='form-label'>Stream</label>
              <input disabled={!enable} 
              onChange={handleChangegraduation} 
              value={user.graduation.stream} 
              name="stream"
              type='text' 
              className='form-control'/>
            </div>
            <div className="form-group">
              <label className='form-label'>Year of Completion</label>
              <input disabled={!enable}
               type='date' 
               className='form-control' 
               value={user.graduation.yearofcompletion}
               onChange={handleChangegraduation}
               name='yearofcompletion'/>
            </div>

            <h4 className='mt-3'>Post Graduation</h4>

            <div className="form-gorup">
              <label className='form-label'>Course</label>
              <input disabled={!enable} 
              onChange={handleChangepostgraduation} 
              value={user.postgraduation.course} 
              name="course"
              type='text' 
              className='form-control'/>
            </div>
            <div className="form-group">
              <label className='form-label'>Stream</label>
              <input disabled={!enable} 
              onChange={handleChangepostgraduation} 
              value={user.postgraduation.stream} 
              name="stream"
              type='text' 
              className='form-control'/>
            </div>
            <div className="form-group">
              <label className='form-label'>Year of Completion</label>
              <input disabled={!enable}
              onChange={handleChangepostgraduation}
              value={user.postgraduation.yearofcompletion}
               type='date' className='form-control'/>
            </div>

            <h4 className='mt-3'>Subjects and classes i can teach</h4>

            <div className="form-group">
              <label className='form-label'>Subjects seperated with comma</label>
              <input disabled={!enable} 
              onChange={(e)=>{setuser({ ...user, subjects: e.target.value.split(',') })}}
               value={user.subjects} name="subjects"
               type='text' 
               className='form-control' 
               placeholder='ex: Math,English    "do not add extra spaces or capital or small cases"'/>
            </div>
            <div className="form-group">
              <label className='form-label'>Classes seperated with comma</label>
              <input disabled={!enable} 
              onChange={(e)=>{setuser({ ...user, classes: e.target.value.split(',') })}} value={user.classes} 
              name="classes"
               type='text' 
               className='form-control' 
               placeholder='ex: class 5, class 6'/>
            </div>

            <h4 className='my-3'>Availaibility</h4>

            <div className='form-group'>
              <span>I can attend classes</span>
            <div className="d-flex flex-wrap w-md-45">
                  <div className='d-flex'>
                    <input disabled={!enable}
                     type='checkbox' 
                     checked={user.modes.includes("online")}
                     className='form-check m-2' id="online"
                     onChange={handleChange3}
                     /> <label htmlFor='online'
                   className='m-2 form-label'>online </label>
                  </div>
                  <div className='d-flex'>
                    <input disabled={!enable}
                     type='checkbox' 
                     checked={user.modes.includes("tution")}
                     className='form-check m-2' id="tution"
                     onChange={handleChange3}
                     /> <label htmlFor='tution'
                   className='m-2 form-label'>tution</label>
                  </div>
              </div>
            </div>
      </form>
      <div className='btn-group my-3 mt-4 float-end'>
        <button className='btn btn-outline-dark px-5 py-2' 
        onClick={()=>setenable(!enable)}>{!enable?<span>Enable</span>:<span>Disbale</span>} Edit</button>
        <button className='btn btn-outline-success px-5 py-2 mx-2' 
        onClick={handleSubmit}>Update & Save</button>
      </div>
      
    </div>
  )
}

export default Education
