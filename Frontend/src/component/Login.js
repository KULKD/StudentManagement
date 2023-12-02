import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import img from "../realll.jpg"
import studentserivce from '../studentserivce';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {


  return (
   <div>
    <h1 class="display">Studento-Offerdable Solutions for Institutes</h1>
   <Link to="/Loginform"><button className='btn btn-primary' type='button'>Login</button></Link> <Link to="/Signupform"><button className='btn btn-primary' type='button'>Sign up ?</button></Link>
     <img src={img} style={{height:650,width:1600}} class="rounded mx-auto d-block" />

   </div>
  )
}

export default Login;
