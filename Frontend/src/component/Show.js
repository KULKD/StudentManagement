import React, { useEffect, useState } from "react"

import studentserivce from "../studentserivce"
import Header from "./Header"
function Show()
{
const [studarr,setarr]=useState([])

useEffect(()=>
  {
  studentserivce.getallstudent()
  .then((result)=>
  {
     setarr([...result.data])
  })
}
,[])
   return (

   <div>
   <Header></Header> 
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Rollno</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Division</th>
    </tr>
  </thead>
  <tbody>
    
  {studarr.map(p=><tr key={p.pid}>
        <td>{p.rollno}</td>
        <td>{p.name}</td>
        <td>{p.age}</td>
        <td>{p.division}</td>
    </tr>)}
  </tbody>
</table>
   </div>
   )
}

export default Show;