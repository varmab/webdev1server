var express=require("express")
var path=require("path")

var app=express();
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/index.html"))
})

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/about.html"))
})

app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/contact.html"))
})

app.listen(8000,()=>{
    console.log("Server 2 is started")
})