import {student} from "./student";
import axios from 'axios';
let baseURL="http://localhost:9000/student"

class studentservice{
   
getallstudent()
{
    return axios.get(baseURL);
}
updateStudent(s){
    console.log("in service",s)
   return axios.put(baseURL+"/student/"+s.rollno,s)
}
getById(rollno){
    return axios.get(baseURL+"/"+rollno);
}
deleteStudent(rollno){
    return axios.delete(baseURL+"/"+rollno);
}
addstudent(s)
{
    console.log("Inside add")
    console.log(s)
    return axios.post(baseURL+"/studentadd",s)
}
validateadmin(adminid)
{
    console.log("Inside validateadmin")
    console.log(adminid)
    return axios.get("http://localhost:9000"+"/admin/"+adminid)
}

addadmin(admin)
{
    
}

}



export default new studentservice();