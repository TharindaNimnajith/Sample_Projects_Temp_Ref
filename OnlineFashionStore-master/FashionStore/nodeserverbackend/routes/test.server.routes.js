const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let TestTable = require('../models/test.model');

router.route('/').get(function (req,res) {
    test.find(function (err,test) {
        if(err){
            console.log(err);
            console.log(err);
        }else{
            res.json(test)
        }
    })
});

router.route('/add').post(function (req,res) {

    let test = new TestTable(req.body);
    test.save()
        .then(test=>{
            res.status(200).json({'todo':'todo Added Successfully'});
        }).catch(err=>{
        res.status(400).send('adding new todo failed');
    });
})

module.exports = router;
//

