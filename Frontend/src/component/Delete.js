import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import studentserivce from '../studentserivce';
import { Link } from 'react-router-dom';
export const Delete = () => {
 
    const[rollno,setadmin]=useState(0)
    const navigate=useNavigate();
    
    const handlechange=(event)=>
    {    
       
        setadmin(event.target.value)
    }
    const deletestud=()=>
    {
        
         
       
         studentserivce.deleteStudent(rollno)
         .then((result)=>
         {
              console.log(result.data)
               navigate("/show")
         }
        
        )
        
        .catch((err)=>
        {
          console.log(err);
        })
   
         
    }
  
 
 
 
 
 
 
 
 
 
 
    return (
    <div>
        <div>
 <div className='d-flex justify-content-centre'>
         <form >
   
      <div class="form-row">
    <div class="form-group col-md-3">
      <label for="ad">Roll NO :<br/></label>
      <input type="text" class="form-control" name="adminid" id="ad" placeholder="Enter Admin id" value={rollno}onChange={handlechange}
      />
 
 <button type="button" class="btn btn-primary" onClick={deletestud}>Submit</button>
    </div>
</div>
  </form>
  
  <Link to="/home">
  <button type="button" class="btn btn-primary">Back to Home Page</button>
  </Link>
   
    </div>  
    </div>
    </div>
  )
}
