import { useState,useEffect} from "react";
import img from "../img.jpg"

import studentservice from "../studentserivce"
import studentserivce from "../studentserivce";
function Displaycard(props) {

  
  const [studetails, setstud] = useState([])
 
useEffect(()=>
{
     studentserivce.getallstudent()
     .then((result)=>
     {
        setstud([...result.data])
     })
},

[])
  return (

    <div class="d-flex flex-wrap justify-content-around">
      <header></header>
      <div class="card" style={{ width: "18rem" }}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Add a Student</h5>

          Name   <input type="text" name="name" id="kd"   />
          Roll no <input type="text" name="kd" id="kd"  />
          Age  <input type="text" name="age" id="kd"   />
          division <input type="text" name="div" id="kd"   />
          <a class="btn btn-primary" >Click Here to Add</a>
        </div>

      </div>
     

    </div>
  )
}

export default Displaycard;