var express=require("express");
var app=express();

app.use(express.static("public"))

function add(a,b){
    return a+b;
}

app.get("/",(req,res)=>{
    res.send("Welcome to my server")
})

app.get("/addNumbers",(req,res)=>{
    var total=add(1,2);
    res.send("Sum is " + total)
})

app.listen(4000,()=>{
    console.log("Server is started")
})
