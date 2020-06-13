const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Category = require('../../models/Category.model');

router.route('/add').post(function (req,res) {

    let category = new Category(req.body);
    category.save()
        .then(category=>{
            res.status(200).json({'category':'success'});
        }).catch(err=>{
        res.status(400).send('faild');
    });
});

router.route('/getAllCategories').get(function (req,res) {
    Category.find(function (err,category){
        if(!err){
            res.json(category);
        }else{
            res.status(400).send('faild');
        }
    });
});


module.exports = router;
//
