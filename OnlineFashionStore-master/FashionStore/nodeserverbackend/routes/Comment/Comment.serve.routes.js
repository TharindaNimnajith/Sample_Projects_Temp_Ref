const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Comment = require('../../models/Comment.model');

router.route('/add').post(function (req,res) {
    let comment = new Comment(req.body);
    comment.save()
        .then(comment=>{
            res.status(200).json({'comment':'success'});
        }).catch(err=>{
        res.status(400).send('faild');
    });
});

router.get("/getComment/:id",function (req,res) {
    const id = req.params.id;
   console.log("GGGGGGGGGGG")
    console.log("Id "+id)
    Comment.find({ itemCode: id}).populate('userId')
        .exec()
        .then(comment =>{
            console.log("Comment")
            console.log(comment)
            console.log("comment")

            if( comment ){
                res.status(200).json(comment);
            }else{
                res.status(404).json({"message": "not found"});
            }
        })
        .catch(err=>{
            res.status(500).json(err);
        })
});


module.exports = router;
