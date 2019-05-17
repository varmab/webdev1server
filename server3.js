var express=require("express");
var app=express();
var path=require("path")

app.use(express.static("public"))

var books=[
    {
        id:1,
        title:"JavaScript",
        author:"John"
    },
    {
        id:2,
        title:"NodeJS",
        author:"Dave"
    },
    {
        id:3,
        title:"React",
        author:"John"
    }
]

app.get("/",(req,res)=>{
    res.send("Welcome to API Server")
})

app.get("/books",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/books.html"))
})

app.get("/api/books",(req,res)=>{
    res.send(books);
})

app.listen(4000,()=>{
    console.log("API Server is started")
})