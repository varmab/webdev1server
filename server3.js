var express=require("express");
var app=express();
var path=require("path")
var bodyParser=require("body-parser")
var db=require('./db')

app.use(express.static("public"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("Welcome to API Server")
})

app.get("/books",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/books.html"))
})

app.get("/api/books",(req,res)=>{
    db.Book.find({},(err,books)=>{
        if(err) res.status(500).send(err);
        res.status(200).send(books)
    })
})

app.post("/api/books",(req,res)=>{
    var newBook=new db.Book(req.body);
    newBook.save((err,book)=>{
        if(err) res.status(500).send(err);
        res.status(200).send(book)
    })
})

app.put("/api/books/:id",(req,res)=>{
    var id=req.params.id;
    db.Book.findByIdAndUpdate(id,{title:req.body.title},{new:true},(err,book)=>{
        if(err) res.status(500).send(err);
        res.send(book)
    })
})

app.delete("/api/books/:id",(req,res)=>{
    var id=req.params.id;
    db.Book.findByIdAndDelete(id,(err,book)=>{
        if(err) res.status(500).send(err);
        res.send(book)
    })
})


app.listen(4000,()=>{
    console.log("API Server is started")
})