var express=require("express");
var router=express.Router();
var db=require('../db');

router.route("/")
    .get((req,res)=>{
        db.Book.find({},(err,books)=>{
            if(err) res.status(500).send(err);
            res.status(200).send(books)
        })
    })
    .post((req,res)=>{
        var newBook=new db.Book(req.body);
        console.log(req.body)
        newBook.save((err,book)=>{
            if(err) res.status(500).send(err);
            res.status(200).send(book)
        })
    })


router.route("/:id")
    .get((req,res)=>{
        var id=req.params.id;
        db.Book.findById(id,(err,book)=>{
            if(err) res.status(500).send(err);
            res.send(book)
        })
    })
    .put((req,res)=>{
        var id=req.params.id;
        db.Book.findByIdAndUpdate(id,{title:req.body.title},{new:true},(err,book)=>{
            if(err) res.status(500).send(err);
            res.send(book)
        })
    })
    .delete((req,res)=>{
        var id=req.params.id;
        db.Book.findByIdAndDelete(id,(err,book)=>{
            if(err) res.status(500).send(err);
            res.send(book)
        })
    })

router.route("/search/:keyword")
    .get((req,res)=>{
        var keyword=req.params.keyword;
        db.Book.find({title:keyword},(err,book)=>{
            if(err) res.status(500).send(err);
            res.send(book)
        })
    })

module.exports=router;
