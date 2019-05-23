var express=require("express");
var app=express();
var path=require("path")
var bodyParser=require("body-parser")
var db=require('./db')
var books=require('./routes/books')
var students=require('./routes/students')

app.use(express.static("public"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.all('/api/*', function(req,res,next){
    const auth = {login: "internship", password: "123456"} // change this
   
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = new Buffer(b64auth, 'base64').toString().split(':')
   
    // Verify login and password are set and correct
    if (!login || !password || 
        login !== auth.login || 
        password !== auth.password) 
   {
      res.set('WWW-Authenticate', 'Basic realm="nope"') // change this
      res.status(401).send('Request is not authorized. You must pass credentials') 
      return
    }
   else {
    next();
   }
})

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/index.html"))
})

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/about.html"))
})

app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/contact.html"))
})

app.get("/books",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/books.html"))
})


app.use("/api/books",books)
app.use("/api/students",students)

app.listen(4000,()=>{
    console.log("API Server is started")
})