import React, { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import "./Profile.css";
import PersonalDetail from './PersonalDetail';
import ContactDetail from './ContactDetail';
import Education from './Education';


const MainProfile = () => {
  const [key,setkey]=useState("personal"); //TABS KEY
  const naviagte=useNavigate();
    const [user,setuser]=useState(useLocation().state); //STORE DATA ABOUT USER RECEIVED FROM PREVIOUS ROUTE
    const[client,setclient]=useState(window.localStorage.getItem("client")); 
    const [profileImage,setprofileImage]=useState({client:client,email:user.email,image:null});
    

    //upload image to the Database

    const updateImage=async (e)=>{  
        const profimage=e.target.files[0];
        const formdata=new FormData();
        formdata.append('image',profimage);
        console.log(formdata);
        try{
        const response=await fetch("http://localhost:4000/uploadimage",{
            method:"POST",
            body:formdata

        });
       const result=await response.json();
       if(result){
        setuser((pre) => { return { ...pre, ["profile"]: result.imageurl }; });
        setprofileImage({...profileImage,["image"]:result.imageurl});
        alert("please click update to update the change before the page get refreshed");
       }
        }
        catch(err){
            alert(err);
        }  
    }


    const uploadImage=async()=>{
      console.log(profileImage);
      const res=await fetch("http://localhost:4000/addimagetoprofile",{
        method:"POST",
        body:JSON.stringify(profileImage),
        headers:{
          "Content-Type":"application/json"
        }
      })
      const result=await res.json();
      alert(result.message);
      console.log(result.user);
      setuser({...user,["profile"]:result.user.profile});
    }


  return (
    <>

    {/* PROFILE SECTION */}

      <div className='d-flex flex-wrap bg-light px-5'>
        <div className='w-30 px-4'>
          <div className="flex flex-column bg-white">


            {/* PROFILE IMAGE */}

            <div className="img-section px-2 d-grid position-relative">
              <label className='edit-img' htmlFor="profile"> edit</label>
              <img src={user.profile} alt="profile" className="rounded-circle mx-auto" width={"150px"} height={"150px"}/>
              <p className="fw-light text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rem illo doloribus hic ut molestias maxime aliquam, dolor amet nisi.</p>
              <button className='btn btn-community px-5 py-2 mx-auto d-grid w-max' onClick={()=>uploadImage()}>upload photo</button>
            </div>

            {/* PROFILE IMAGE ENDS */}


            {/* TABS START */}
            <div className='tabs' >
              <ul className='list-unstyled my-2 mx-auto d-grid profile-tabs'>
                <p tabIndex={0} 
                className='nav-tabs-custom'
                id={key==="personal"?"br-bl":""}
                onClick={()=>setkey("personal")}><li>personal details</li></p>

                <p tabIndex={1} 
                className='nav-tabs-custom'
                id={key==="contact"?"br-bl":""}
                onClick={()=>setkey("contact")}><li>contact details</li></p>

                {client==="teacher"?<p tabIndex={2}
                className='nav-tabs-custom'
                id={key==="education"?"br-bl":""}
                onClick={()=>setkey("education")}><li>education details</li></p>:<></>}

              </ul>
            </div>

            {/* TABS END */}

          </div>
        </div>

        {/*PROFILE DETAILS START */}

        <div className='w-70 px-4 bg-white'>
          <div hidden={key==="personal"?false:true}><PersonalDetail user={user}/></div>
          <div hidden={key==="contact"?false:true}><ContactDetail user={user}/></div>
          <div hidden={key==="education"?false:true}><Education user={user}/></div>
        </div>
      </div>

        {/* PROFILE DETAILS END */}
        {/* PROFILE END */}

      {/* HIDDEN FORM FOR EDITING IMAGE */}
      <form hidden >
            <input type='file' id='profile' name='profile' onChange={(e)=>{updateImage(e)}} />
        </form>
    </>
  )
}

export default MainProfile
