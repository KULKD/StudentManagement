import React,{useEffect,useState} from "react"
import img from "../tenor.gif"
import studentserivce from "../studentserivce"
import { Link } from "react-router-dom"
import Header from "./Header"
function Add()
{

const [stuobj,setstud]=useState({rollno:"",name:"",age:"",division:""})

function handlechange(event)
{
    let{name,value}=event.target
    setstud({...stuobj,[name]:value})

}
function add()
{
  console.log(stuobj)
    studentserivce.addstudent(stuobj)
    .then((result)=>
    {
         
        console.log(result.data)
         setstud({rollno:"",name:"",age:"",division:""})
    })
    .catch((err)=>
    {
      console.log(err)
    })
} 



    return (
    <div>
      <Header></Header>
     <div class="d-flex flex-wrap justify-content-around">
      <div class="card" style={{ width: "18rem" }}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Add a Student</h5>
         
        Name:<br/>
        <input type="text" name="name" id="kd12" value={stuobj.name} onChange={handlechange}/><br/>
        Roll no:<br/>
        <input type="text" name="rollno" id="kd0687" value={stuobj.rollno} onChange={handlechange} /><br/>
        Age:<br/>
        <input type="text" name="age" id="kd1324" value={stuobj.age} onChange={handlechange}   /><br/>
        division:<br/>
        <input type="text" name="division" id="kd3" value={stuobj.division} onChange={handlechange} /><br/>
        
          <button type="button" class="btn btn-primary" onClick={add}>Click Here to Add</button>
          
        </div>

      </div>
     

    </div>
    </div>
    )
}


export default Add;