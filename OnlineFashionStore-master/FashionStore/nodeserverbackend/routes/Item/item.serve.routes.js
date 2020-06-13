const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Item = require('../../models/item.model');
let NewArraivalItem = require('../../models/NewArrivalItem.model');



router.route('/getAllItems').get(function (req, res) {


    Item.find(function (err, item) {

        if (!err) {
            res.json(item);
        } else {
            res.status(400).send('faild');
        }

    });
});


router.route('/add').post(function (req, res) {

    const newItemObj = {
        itemCode: req.body.itemCode,
        itemName: req.body.itemName,
        brandCategory : req.body.brandCategoryId._id,
        description : req.body.description,
        discount : req.body.discount
    }

    let item = new Item(newItemObj);
    item.save()
        .then(item => {
            res.status(200).json({'item': 'success'});
        }).catch(err => {
        res.status(400).send('faild');
    });
});

router.route('/itemCategory').get(function (req, res) {

        Item .find().populate('brandCategory')
            .then(item => {

                res.json(item);
            }).catch(err => {
            res.status(400).send('faild');
        });

});

router.route('/addNewArraivalItems').post(function (req, res) {
    let newArrivalItem = req.body;
    newArrivalItem.map(bc => {
        const newItemObj = {
            itemCode: bc.itemCode._id
        }
        let newitem = new NewArraivalItem(newItemObj);
        newitem.save()
            .then(item => {
                res.status(200).json({'newArrival': 'success'});
            }).catch(err => {
            res.status(400).send('faild');
        });
    })
});


router.route('/updateDiscount/:id/:discount').get(function (req, res) {
    let id = req.params.id;
    let discount=req.params.discount;
    Item.updateOne({_id:id},{$set: {discount:discount}}).then(sup=>{
        res.status(200).json({'item':'successful'});
    }).catch(err=>{

        res.status(400).send('fail');
    });
});





module.exports = router;
//





