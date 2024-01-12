import React, { useState } from 'react'
import "./Auth.css"
import { Link ,useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate();
  const [client,setclient]=useState("student");
  const [form,setform]=useState({
    username:'',
    password:''
  })
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setform((pre)=>{return {...pre,[name]:value}})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    var res;
    if(client==="student"){
      try{
      res = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      }
    });
      }
      catch(err){
        alert("we could not fetch your request now");
      }
    }
    else if(client==="teacher"){
      try{
      res = await fetch("http://localhost:4000/loginteacher", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      }
    });
      }
      catch(err){
        alert("we could not fetch your request now");
      }
    }

    const result=await res.json();
    if(result.success){
      localStorage.setItem("auth-token",result.token);
      localStorage.setItem("user-email",result.user.email);
      localStorage.setItem("client",client);
      navigate('/profile',{state:result.user})
    }
    else
      alert(result.error);
  }

// if (res.ok) {
//         console.log('Login successful:', result.user);
//         navigate("/profile",{state:result.user});
//       } else {
//         console.error('Login failed:', result.message);
//         alert('Login failed. Please check your credentials.'+result.message);
//       }
// }


  return (
    <>
        <div className='d-flex flex-wrap pt-1 justify-content-center'>
          <div className=' bg-black col-md-6 h-100'>
            <img src='https://tse4.mm.bing.net/th?id=OIP.yroOtSWtgcUXs0FeOryvuAHaEK&pid=Api&P=0&h=180' alt='registration' width="100%" height="100%"/>
          </div>
          <form className="p-3 col-md-6 px-md-5" >
          <fieldset className="rounded-1 px-md-5">
            <h1 className="fw-normal fs-2 lh-lg text-primary">Welcome to Teachshala</h1>

            <div className='form-group w-100 px-3 fw-bolder fs-4'>
              <label htmlFor='lists' className='form-label'>Select log in as Teacher / Student </label>
              <select className='form-control border-5 fw-bolder' id='lists' onChange={(e)=>setclient(e.target.value)}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            </div>

          <div className="form-group col-md-12 px-3">
            <label className="form-label text-capitalize" htmlFor="username">username</label>
            <input type="text" className="form-control rounded-1" name="email" id="username" placeholder="username" onChange={handleChange} value={form.name}/>
          </div>
          <div className="form-group col-md-12 px-3">
            <label className="form-label text-capitalize" htmlFor="password">password</label>
            <input type="password" className="form-control rounded-1" name="password" id="password" placeholder="password" onChange={handleChange} value={form.password}/>
          </div>
          <a className="lh-base fs-6 fw-light text-secondary text-decoration-none" href='#action'>forgot your password ?</a>
          <div className='form-group'>
            <input type='checkbox' id="agreecheck" className='form'/>
            <label htmlFor='agreedcheck' className='form-label text-capitalize'> agreed</label>
          </div>
                    <button className="btn btn-danger mt-3 mb-3 rounded-2 fw-bold text-capitalize w-100" type="submit" onClick={handleSubmit}>log in</button>
          <p className="text-center fw-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas omnis blanditiis officia aperiam, harum doloribus aliquam, nihil repudiandae cupiditate atque dolorem numquam quo cum commodi non magnam quam? Provident, quam.</p>
        <Link className="lh-base fs-6 text-secondary text-center" to="/register">don't have account ?</Link>
          </fieldset>
        </form>
        </div>
    </>
  )
}

export default Login
