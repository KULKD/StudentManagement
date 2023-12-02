import React from 'react'
import img from "../img.jpg"
import { useState } from 'react';
import { useEffect } from 'react';
import studentserivce from '../studentserivce';
import { useNavigate } from 'react-router-dom';
export const Loginform = () => {
  
    const[admin,setadmin]=useState({adminid:" ",password:" "})
    const[errid,seterrmsg]=useState(" ")
    const[errpass,seterrpass]=useState(" ")
    const navigate=useNavigate();
    
    const handlechange=(event)=>
    {    
       let {name,value}=event.target
        setadmin({...admin,[name]:value})
    }
    const validate=()=>
    {
        
         
       
         studentserivce.validateadmin(admin.adminid)
         .then((result)=>
         {
               
             console.log("Inside then")

             console.log(result.data.adminid)
             var pass=result.data.password
             var adpass=admin.password
            console.log(pass)
            console.log(adpass)
           if(pass==adpass)
             {console.log("Inside if")
                navigate("/home")
         }
         else 
         {
          console.log("Error Occured....")
         }
        })
        
        .catch((err)=>
        {
          console.log(err);
        })
   
         
    }
  
  
  
    return (
    <div>
          <img src={img} style={{height:400, width:500 }}className="rounded mx-auto d-block" />
         <div className='d-flex justify-content-centre'>
         <form >
   
      <div class="form-row">
    <div class="form-group col-md-3">
      <label for="ad">Admin Id :<br/></label>
      <input type="text" class="form-control" name="adminid" id="ad" placeholder="Enter Admin id" value={admin.adminid}onChange={handlechange}
      />
    </div>
    <br/>
    <div class="form-group col-md-5">
      <label for="pass">Password :</label>
      <input type="text" class="form-control" name="password" id="pass" placeholder="Enter Admin id" onKeyUp={handlechange}/>
    </div>
   
    <button type="button" class="btn btn-primary" onClick={validate}>Submit</button>
</div>
  </form>
</div>
        </div>
        
  )
}
