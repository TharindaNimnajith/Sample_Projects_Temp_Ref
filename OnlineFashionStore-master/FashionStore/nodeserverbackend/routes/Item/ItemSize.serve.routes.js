const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let size = require('../../models/ItemSizes.model');


router.route('/getAllSizes').get(function (req,res) {
    size.find(function (err,size) {
        if(!err){
            res.json(size);
        }else{
            res.status(400).send('faild');
        }
    });
});


module.exports = router;
//
