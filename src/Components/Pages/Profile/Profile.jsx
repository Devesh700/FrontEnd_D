// import React, { useState } from 'react'
// import { Button } from 'react-bootstrap'
// import { useNavigate,useLocation } from 'react-router-dom'
// const Profile = () => {
//     const naviagte=useNavigate();
//     const [profileImage,setprofileImage]=useState(null);
//     const [user,setuser]=useState(useLocation().state);
//     const[client,setclient]=useState(window.localStorage.getItem("client"));
//     const handleChange=(e)=>{
//         const name=e.target.name;
//         const value=e.target.value;
//         setuser((pre)=>{return {...pre,[name]:value}});
//     }

//     const handleSubmit=async (e)=>{
//         console.log(user);
//         const res=await fetch(`http://localhost:4000/update${client}`,{
//             method:"POST",
//             body:JSON.stringify(user),
//             headers:{"Content-Type":"application/json"}
//         });
//         const result=await res.json();
//         if(result){
//         // console.log(await res.json());
//         alert("successfully updated");
//         naviagte("/profile",{state:user});
//         }
//         else{
//             alert(result);
//         } 
//     }
//     const updateImage=async (e)=>{
//         const profimage=e.target.files[0];
//         const formdata=new FormData();
//         formdata.append('image',profimage);
//         console.log(formdata);
//         try{
//         const response=await fetch("http://localhost:4000/uploadimage",{
//             method:"POST",
//             body:formdata

//         });
//        const result=await response.json();
//        if(result){
//         setuser((pre) => { return { ...pre, ["profile"]: result.imageurl }; });
//         alert("please click update to update the change before the page get refreshed");
//        }
//         }
//         catch(err){
//             alert(err);
//         }
//     }
//   return (
//     <>
//       <div className='d-flex flex-wrap justify-content-center p-2'>
//         <form hidden >
//             <input type='file' id='profile' name='profile' onChange={(e)=>{updateImage(e)}} />
//         </form>
//         <div className='col-md-6'>
//             <div className='rounded-1 overflow-hidden d-grid'>
//                 <label htmlFor="profile"><img src={user.profile} width="100px" height="100px" alt='profile' className='profile-image rounded-1 mx-auto'/></label>
//                 {/* <p onClick={updateImage}>update</p> */}
//             </div>
//             <form>
//                 <fieldset>
//                     <div className='form-group'>
//                         <label htmlFor='name' className='form-label'>Name</label>
//                         <input onChange={handleChange} type='text' className='form-control' value={user.fullname} name='name' id='name'/>
//                     </div>
//                     <div className='form-group'>
//                         <label htmlFor='phone' className='form-label'>phone</label>
//                         <input onChange={handleChange} type='text' className='form-control' value={user.phone} name='phone' id="phone" />
//                     </div>
//                     <div className='form-group'>
//                         <label htmlFor='pinCode' className='form-label'>pin code</label>
//                         <input onChange={handleChange} type='pin code' className='form-control' value={user.pinCode} name='pinCode' id='pinCode'/>
//                     </div>
//                     <div className='form-group'>
//                         <label htmlFor='address' className='form-label'>street address</label>
//                         <input onChange={handleChange} type='text' className='form-control' value={user.address} name='address' id='address'/>
//                     </div>
//                     <div className='form-group'>
//                         <label htmlFor='description' className='form-label'>description</label>
//                         <input onChange={handleChange} type='text' className='form-control' value={user.description} name='description' id='description'/>
//                     </div>
//                     <div className='form-group' hidden={client==="student"?true:false}>
//                         <label htmlFor='aadhar' className='form-label'>aadhar</label>
//                         <input disabled onChange={handleChange} type='text' className='form-control' value={user.aadhar} name='aadhar' id='aadhar'/>
//                     </div>
//                     <div className='form-group' hidden={client==="student"?true:false}>
//                         <label htmlFor='highesteducation' className='form-label'>highesteducation</label>
//                         <input  onChange={handleChange} type='text' className='form-control' value={user.highesteducation} name='highesteducation' id='highesteducation'/>
//                     </div>
//                     <div className='form-group' >
//                         <label htmlFor='city' className='form-label'>city</label>
//                         <input onChange={handleChange} type='text' className='form-control' value={user.city} name='city' id='city'/>
//                     </div>
//                     <div className='form-group'>
//                         <label htmlFor='state' className='form-label'>state</label>
//                         <input onChange={handleChange} type='text' className='form-control' value={user.state} name='state'  id='state'/>
//                     </div>
//                     <div className='form-group'>
//                         <label htmlFor='username' className='form-label'>username</label>
//                         <input onChange={handleChange} type='text' className='form-control' value={user.email} name='username' id='username' disabled/>
//                     </div>
//                     <div className='form-group'>
//                         <label htmlFor='email' className='form-label'>email address</label>
//                         <input onChange={handleChange} type='email' className='form-control' value={user.email} name='email' id='email' disabled/>
//                     </div>
//                     <Button variant='danger' className='w-100 my-5' onClick={handleSubmit}>Update Account Details</Button>
//                 </fieldset>
//             </form>
//         </div>
//         <div className='col-md-4 p-5'>
//             <h1 className='fs-1 fw-light mb-5'>Courses Enrolled</h1>
//             <div className=' card tutor-card m-2 w-100' >
//           <img className=' card-img-top' src='Images/Home_bg.jpg' alt='tutor'/>
//           <div className='card-body'>
//             <p className='text-success'>elem.instructor.name</p>
//             <h4 className='card-title '>elem.name</h4>
//             <p className=''>&#8377; elem.price</p>
//           </div>
//             <Button variant="primary" className=' rounded-0' onClick={()=>naviagte("coursedescription",{})}>view more</Button>
//         </div>      
//         </div>
//       </div>
//     </>
//   )
// }

// export default Profile
