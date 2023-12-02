const mysql=require("mysql")

const mysqlconnection=mysql.createConnection(
    {

   host:"127.0.0.1",
   user:"root",
   password:"root123",
   database :"test",
   port :3306

})

mysqlconnection.connect((err,result)=>
{
    if(err)
    {
        console.log("error occured")
    }
    else
    {
        console.log("Connected.....")
    }
})

module.exports=mysqlconnection