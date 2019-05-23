var express=require("express");
var router=express.Router();
var db=require('../db');

router.get("/",(req,res)=>{
    db.Book.find({},(err,students)=>{
        if(err) res.status(500).send(err);
        res.status(200).send(students)
    })
})

router.post("/",(req,res)=>{
    var newStudent=new db.Student(req.body);
    console.log(req.body)
    newStudent.save((err,student)=>{
        if(err) res.status(500).send(err);
        res.status(200).send(student)
    })
})

router.put("/:id",(req,res)=>{
    var id=req.params.id;
    db.Student.findByIdAndUpdate(id,{name:req.body.name},{new:true},(err,student)=>{
        if(err) res.status(500).send(err);
        res.send(student)
    })
})

router.delete("/:id",(req,res)=>{
    var id=req.params.id;
    db.Student.findByIdAndDelete(id,(err,student)=>{
        if(err) res.status(500).send(err);
        res.send(student)
    })
})

module.exports=router;