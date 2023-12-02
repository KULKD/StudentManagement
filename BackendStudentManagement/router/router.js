const express=require("express")
const myrouter=express.Router()
var connection=require("../db/dbconnection")

//to display data in table format
myrouter.get("/student",(req,res)=>
{
    connection.query("select * from student",(err,data,fields)=>
    {
         if(err)
         {
            res.status(500).send("Data Not Found !!!!")
         }
         else
         {
             res.send(data)
         }
    })

    
})




//to add the data in the table 
myrouter.post("/student/studentadd",(req,res)=>
{     
let obj=req.body  

 console.log(obj)
 
    connection.query("insert into student values(?,?,?,?)",[req.body.rollno,req.body.name,req.body.age,req.body.division],(err)=>
    {
        if(err)
        {
            console.log(err)
            res.status(500).send(err)
        }
        else
        {
            res.send("Added Succesfully...")
        }
    })
})

//to get the required data
myrouter.get("/student/:stdid",(req,res)=>
{
   connection.query("select * from student where rollno=?",[req.params.stdid],(err,data,fields)=>
   {
    console.log(data)
    if(!err)
    {
         res.status(500).send(data)
    }
    else
    {
        res.send("Not Found....")
    }
   })
})

//to delete from the student table

myrouter.delete("/student/:rollno",(req,res)=>
{
    console.log(req.params.rollno)
 connection.query("delete from student where rollno=?",[req.params.rollno],(err=>
    {
        if(err)
        {
            res.status(500).send("Error Found")
        }
        else 
        {
            res.send("Deleted Succesfully")
        }
    }))
})

myrouter.put("/student/:stdid",(req,res)=>
{
     connection.query("update student set division=? where rollno=?",[req.body[0].division,req.body[0].roll],(err,result)=>
     {
         if(err)
         {
            res.status(500).send("Error in Updation")
         }
         else 
         {
            res.send("Data Updated Succesfully...")
         }
     })
})
myrouter.get("/admin/:adminid",(req,res)=>
{
    console.log("Inside the admin validation")
    connection.query("select * from admin where adminid=?",[req.params.adminid],(err,data,fields)=>
    {
         if(err)
         {
            console.log("Error.....")
            res.status(500).send("Data Not Found !!!!")
         }
         else
         {
             res.send(data[0])
         }
    })

    
})



module.exports=myrouter;