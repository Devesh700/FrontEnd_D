import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const ContactDetail = (data) => {
     const naviagte=useNavigate();
    const[user,setuser]=useState({...data.user})
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
   const [enable,setenable]=useState(false);
  return (
    <div className='p-2'>
      <h4 className='border-bottom pb-3'>Contact Details</h4>
      <form >
        <div className='d-flex flex-wrap  justify-content-around'>
            <div className="form-group w-md-45">
                <label className='form-label'>Phone</label>
                <input onChange={handleChange} name="phone"
                 disabled={!enable} type='text' className='form-control' value={user.phone}/>
            </div>
            <div className="form-group w-md-45">
                <label className='form-label'>Email</label>
                <input onChange={handleChange} name="email"
                 disabled={!enable} type='text' className='form-control' value={user.email}/>
            </div>
        </div>
        <div className='d-flex flex-wrap  justify-content-around'>
            <div className="form-group w-md-45">
                <label className='form-label'>Whatsapp</label>
                <input onChange={handleChange} name="whatsapp"
                 disabled={!enable} type='text' className='form-control' value={user.whatsapp}/>
            </div>
            <div className="form-group w-md-45">
                <label className='form-label'>Linkedln</label>
                <input onChange={handleChange} name="linkedln"
                 disabled={!enable} type='text' className='form-control' value={user.linkedln}/>
            </div>
        </div>
        <div className='d-flex flex-wrap  justify-content-around'>
            <div className="form-group w-md-45">
                <label className='form-label'>Facebook</label>
                <input onChange={handleChange} name="facebook"
                 disabled={!enable} type='text' className='form-control' value={user.facebook}/>
            </div>
            <div className="form-group w-md-45">
                <label className='form-label'>Instagram</label>
                <input onChange={handleChange} name="instagram"
                 disabled={!enable} type='text' className='form-control' value={user.instagram}/>
            </div>
        </div>

        <div className='d-flex flex-wrap  justify-content-around'>
          <div className="form-group w-md-45">
                <label className='form-label'>Twitter</label>
                <input onChange={handleChange} name="twitter"
                 disabled={!enable} type='text' className='form-control' value={user.twitter}/>
            </div>
        <div className="form-group w-md-45">
            <label className='form-label'>You Tube</label>
            <input onChange={handleChange} name="youtube"
             disabled={!enable} type='text' className='form-control' value={user.youtube}></input>
        </div>
        </div>
      </form>
      <div className='btn-group my-3 mt-4 float-end'>
        <button className='btn btn-outline-dark px-5 py-2' onClick={()=>setenable(!enable)}>{!enable?<span>Enable</span>:<span>Disbale</span>} Edit</button>
        <button className='btn btn-outline-success px-5 py-2 mx-2' onClick={handleSubmit}>Update & Save</button>
      </div>
    </div>
  )
}

export default ContactDetail
