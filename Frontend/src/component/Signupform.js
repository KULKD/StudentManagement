import React from 'react'

export const Signupform = () => {

  const addadmin=()=>
  {
    
  }
  return (
    <div>
       <form>
  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputEmail4">Adminid</label>
      <input type="email" name="id"  id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-3">
      <label for="pass">Password</label>
      <input type="password" class="form-control" id="pass" placeholder="Password"/>
    </div>
  
  <button type="submit" class="btn btn-success" onChange={addadmin} >Sign Up</button>
 
  </div>
</form> 
        </div>
  )
}
