import { useState } from "react"; 
import "./Auth.css"
import { Link, useNavigate } from 'react-router-dom';
const Registration = () => {
  const navigate=useNavigate();
  const [teacher,setteacher]=useState(false);
    const [form, setform] = useState({
      fullname:'',
  email: '',
  phone:'',
  password: ''
});

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setform(()=>{
      return {...form,[name]:value}})
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    var res;
    if(!teacher){
      res = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      }
    });
    }
    else if(teacher){
      res = await fetch("http://localhost:4000/registerteacher", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json"
      }
    });
    }

    const result=await res.json();
    if(result.success){
     localStorage.setItem("auth-token",result.token);
      localStorage.setItem("user-email",result.user.email);
      localStorage.setItem("client",result.user);
      navigate('/profile',{state:result.user})
    }
    else
      alert(result.error);
  }

  return (
    <>
      <div className="d-flex flex-wrap pt-1">
        <div className=' bg-black col-md-6 h-100' hidden={teacher}>
            <img src='https://tse4.mm.bing.net/th?id=OIP.yroOtSWtgcUXs0FeOryvuAHaEK&pid=Api&P=0&h=180' alt='registration' width="100%" height="100%"/>
          </div>
          <form className={teacher?"px-md-5 col-md-12":"px-md-5 col-md-6"} onSubmit={handleSubmit}>
          <fieldset className="rounded-1 px-md-5 d-flex flex-wrap justify-content-center">
            <h1 className="fw-normal fs-2 lh-lg">Welcome to Teachshala</h1>

            <div className='form-group w-100 px-3 fw-bolder fs-4'>
              <label htmlFor='lists' className='form-label'>Select log in as Teacher / Student </label>
              <select className='form-control border-5 fw-bolder' id='lists' onChange={(e)=>setteacher(e.target.value==="teacher"?true:false)}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
            </div>

          <div className={teacher?"form-group col-md-6 px-3 py-2":"form-group col-md-12 px-3"}>
            <label className="form-label text-capitalize" htmlFor="fullname">fullname</label>
            <input type="text" className="form-control rounded-1" name="fullname" id="fullname" placeholder="fullname" onChange={handleChange} value={form.fullname}/>
          </div>
          <div className={teacher?"form-group col-md-6 px-3 py-2":"form-group col-md-12 px-3"}>
            <label className="form-label text-capitalize" htmlFor="email">email</label>
            <input type="text" className="form-control rounded-1" name="email" id="email" placeholder="email" onChange={handleChange} value={form.email}/>
          </div>
          <div className={teacher?"form-group col-md-6 px-3 py-2":"form-group col-md-12 px-3"}>
            <label className="form-label text-capitalize" htmlFor="phone">phone</label>
            <input type="text" className="form-control rounded-1" name="phone" id="phone" placeholder="phone" onChange={handleChange} value={form.phone}/>
          </div>
          <div className={teacher?"form-group col-md-6 px-3 py-2":"form-group col-md-12 px-3"}>
            <label className="form-label text-capitalize" htmlFor="password">password</label>
            <input type="password" className="form-control rounded-1" name="password" id="password" placeholder="password" onChange={handleChange} value={form.password}/>
          </div>
          <div className={teacher?"form-group col-md-6 px-3 py-2":"form-group col-md-12 px-3"} hidden={!teacher}>
            <label className="form-label text-capitalize" htmlFor="aadhar">aadhar</label>
            <input type="text" className="form-control rounded-1" name="aadhar" id="aadhar" placeholder="aadhar" onChange={handleChange} value={form.password}/>
          </div>
          <div className={teacher?"form-group col-md-6 px-3 py-2":"form-group col-md-12 px-3"} hidden={!teacher}>
            <label className="form-label text-capitalize" htmlFor="age">age</label>
            <input type="number" className="form-control rounded-1" name="age" id="age" placeholder="age in years" onChange={handleChange} value={form.password}/>
          </div>
          <div className={teacher?"form-group col-md-6 px-3 py-2":"form-group col-md-12 px-3"} hidden={!teacher}>
            <label className="form-label text-capitalize" htmlFor="experience">experience</label>
            <input type="text" className="form-control rounded-1" name="experience" id="experience" placeholder="experience in years " onChange={handleChange} value={form.password}/>
          </div>
          <div className={teacher?"form-group col-md-6 px-3 py-2":"form-group col-md-12 px-3"} hidden={!teacher}>
            <label className="form-label text-capitalize" htmlFor="highesteducation">highesteducation</label>
            <input type="text" className="form-control rounded-1" name="highesteducation" id="highesteducation" placeholder="ex: B Tech/BE" onChange={handleChange} value={form.password}/>
          </div>
          <button className="btn btn-danger mt-3 mb-3 rounded-1 w-100" onClick={handleSubmit}>sign up</button>
          <p className="text-center fw-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas omnis blanditiis officia aperiam, harum doloribus aliquam, nihil repudiandae cupiditate atque dolorem numquam quo cum commodi non magnam quam? Provident, quam.</p>
        <Link className="lh-base fs-6 text-secondary text-center" to="/login">Already have account ?</Link>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default Registration;
