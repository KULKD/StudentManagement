
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react';
import Header from './component/Header';
import Card from './component/Displaycard';

import {Routes,Route, useNavigate} from 'react-router-dom'
import Displaycard from './component/Displaycard';
import Home from "./component/Home"
import Show from "./component/Show"
import Add from "./component/Add"
import Login from './component/Login';

import { Navigate } from "react-router-dom";
import { Loginform } from './component/Loginform';
import { Signupform } from './component/Signupform';
import { Delete } from './component/Delete';
function App() {
  

 
   

  return (
 
   <div>
     
    
    <Routes>
    <Route path="/" element={<Navigate to="/Login" />} />

        <Route path="/home1" element={<Header></Header>}></Route>
    <Route path="/displaycard" element={<Displaycard></Displaycard>}></Route>
    <Route path="/home" element={<Home></Home>}></Route>
    <Route path="/show" element={<Show></Show>}></Route>
     <Route path="/add" element={<Add></Add>}></Route>
     <Route path="/delete" element={<Delete></Delete>}></Route>
     <Route path="/Login" element={<Login></Login>}></Route>
     <Route path="/Loginform" element={<Loginform></Loginform>}></Route>
     <Route path="/Signupform" element={<Signupform></Signupform>}></Route>

    </Routes>
    </div>
  );
}

export default App;
