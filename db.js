var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/internship")

//Create schema

var bookSchema=mongoose.Schema({
    title:String,
    author:String
})

//Create model
exports.Book=mongoose.model("Book",bookSchema,'books');

var studentSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    rollNumber:String
})

exports.Student=mongoose.model("Student",studentSchema,'students');
