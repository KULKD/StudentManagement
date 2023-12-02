import { NavLink } from "react-router-dom";
import img from "../"
import React, { useState } from 'react';

function Header(props)
{
   
    
 
   return(
    <div >
<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div style={{color:"white"}} >
     <NavLink to="/home"style={{padding: 30}}>Home</NavLink>
     <NavLink to="/show" style={{padding: 30}} >Student List</NavLink>
     <NavLink to="/add" style={{padding: 30}}>Add a Student</NavLink>
     <NavLink to="/delete"style={{padding: 30}}>Delete a Student</NavLink>
     <NavLink to="/Login" style={{padding: 30}}>SignOut</NavLink>
     </div>
</nav>

   
    </div>
   )
}


export default Header;