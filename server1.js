var express=require("express");
var app=express();

app.get("/",(req,res)=>{
    res.send("HELLO WORLD")
})

app.listen(4000,()=>{
    console.log("Server is started")
})
