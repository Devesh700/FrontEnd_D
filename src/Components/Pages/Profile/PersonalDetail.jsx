import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PersonalDetail = (data) => {
    const naviagte=useNavigate();
    const[user,setuser]=useState({...data.user})
    const [enable,setenable]=useState();
    const client=window.localStorage.getItem('client');
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setuser((pre)=>{return {...pre,[name]:value}});
    }

    const handleSubmit=async (e)=>{
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
      <h4 className='border-bottom pb-3'>Personal Details</h4>
      <form >
        <div className='d-flex flex-wrap  justify-content-between'>
            <div className="form-group w-md-45">
                <label className='form-label'>Full Name</label>
                <input onChange={(e)=>handleChange(e)} name='fullname'
                 disabled={!enable} type='text' className='form-control' value={user.fullname}/>
            </div>
            <div className="form-group w-md-45">
                <label className='form-label'>Your Tagline</label>
                <input onChange={(e)=>handleChange(e)} name='tagline'
                 disabled={!enable} type='text' className='form-control' value={user.tagline}/>
            </div>
        </div>
        <div className='d-flex flex-wrap  justify-content-between'>
            <div className="form-group w-md-45">
                <label className='form-label'>Hourly fees</label>
                <input onChange={(e)=>handleChange(e)} name='fees'
                 disabled={!enable} type='text' className='form-control' value={user.fees}/>
            </div>
            <div className="form-group w-md-45">
                <label className='form-label'>Age</label>
                <input onChange={(e)=>handleChange(e)} name='age'
                 disabled={!enable} type='text' className='form-control' value={user.age}/>
            </div>
        </div>
        <div className='d-flex flex-wrap  justify-content-between'>
            <div className="form-group col-md-4">
                <label className='form-label'>Country</label>
                <input onChange={(e)=>handleChange(e)} name='country'
                 disabled={!enable} type='text' className='form-control' value={user.country}/>
            </div>
            <div className="form-group col-md-3">
                <label className='form-label'>City</label>
                <input onChange={(e)=>handleChange(e)} name='city'
                 disabled={!enable} type='text' className='form-control' value={user.city}/>
            </div>
            <div className="form-group col-md-2">
                <label className='form-label'>Zip Code</label>
                <input onChange={(e)=>handleChange(e)} name='zipcode'
                 disabled={!enable} type='text' className='form-control' value={user.zipcode}/>
            </div>
        </div>
        <div className="form-group">
            <label className='form-label'>A Breif Introduction</label>
            <textarea onChange={(e)=>handleChange(e)} name='description'
            disabled={!enable} className='form-control' value={user.description}></textarea>
        </div>
      </form>
      <div className='btn-group my-3 mt-4 float-end'>
        <button className='btn btn-outline-dark px-5 py-2' onClick={()=>setenable(!enable)}>{!enable?<span>Enable</span>:<span>Disbale</span>} Edit</button>
        <button className='btn btn-outline-success px-5 py-2 mx-2' onClick={handleSubmit}>Update & Save</button>
      </div>
    </div>
  )
}

export default PersonalDetail
