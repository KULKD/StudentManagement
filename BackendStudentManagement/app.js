const express=require("express")
const app=express()
const path=require("path")
const router=require("./router/router")

const bodyParser = require("body-parser")

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use("/",router)

app.listen(9000)

module.exports=app;
