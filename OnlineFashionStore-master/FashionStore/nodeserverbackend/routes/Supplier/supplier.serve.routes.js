const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Supplier = require('../../models/Supplier.model');


router.route('/add').post(function (req,res) {

    let supplier = new Supplier(req.body);
    supplier.save()
        .then(sup=>{
            res.status(200).json({'supplier':'successful'});
        }).catch(err=>{
        res.status(400).send('fail');
    });
});

router.route('/getAllSuppliers').get(function (req,res) {
    Supplier.find(function (err,supplier) {
        if(!err){
            res.json(supplier);
        }else{
            res.status(400).send('fail');
        }
    });
});

router.route('/deleteSuppliers/:id').get(function (req, res) {
    console.log("Inside of deleteSupplier backend");
    let id=req.params.id;
    console.log("Delete Called!");
    console.log("Delete ID:"+id);
    Supplier.deleteOne({_id:id}).then(sup=>{
        console.log("successful");
        res.status(200).json({'supplierDelete':'successful'});
    }).catch(err=>{
        console.log("fail");
        res.status(400).send('fail');
    });
});

module.exports = router;

