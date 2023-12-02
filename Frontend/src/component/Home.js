import React from 'react'
import img from "../tenor.gif"
import img1 from "../add.gif"
import img3 from "../show.gif"
import img4 from "../kaito-study.gif"
import img5 from "../studying.gif"
import img6 from "../study3.gif"
import img7 from "../aa.gif"
import image from "../pxfuel.jpg"
import { Link } from 'react-router-dom';
import { red } from 'color-name'
import Header from './Header'
function Home()
{
    return (
        <div>
       
        <Header></Header>  
         <div class='d-flex justify-content-around' >
        
          
            <div class="d-flex justify-content-centre">
          <div class="card" style={{ width: "18rem" }}>
        <img style={{ width: 300, height: 200 }} src={img1} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Add a Student</h5>

         
          <Link to="/add">
          <button  class="btn btn-success" >Click Here to Add</button>
          </Link>
        </div>
        </div>
     

    </div>

    <div class="d-flex justify-content-centre">
          <div class="card" style={{ width: "18rem" }}>
        <img style={{ width: 300, height: 200 }} src={img3} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Show the Students</h5>

         
          <Link to="/show">
          <button  class="btn btn-secondary" >Click Here to Show</button>
          </Link>
        </div>
        </div>
     

    </div>
   
    
    <div class="d-flex justify-content-around">
          <div class="card" style={{ width: "18rem" }}>
        <img style={{ width: 300, height: 200 }} src={img4} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Delete a Student</h5>

        <Link to="/delete">
          <button  class="btn btn-danger" >Click Here to Delete</button>
          </Link>
        </div>
        </div>
     

    </div>

    <div class="d-flex justify-content-around">
          <div class="card" style={{ width: "18rem" }}>
        <img style={{ width: 300, height: 200 }} src={img7} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Delete a Update</h5>

        <Link to="/delete">
          <button  class="btn btn-primary" >Click Here to Update</button>
          </Link>
        </div>
        </div>
     

    </div>


        
        </div>
        </div>
       
    )
}

export default Home;