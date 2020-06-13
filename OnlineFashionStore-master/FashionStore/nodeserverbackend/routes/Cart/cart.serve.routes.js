const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let Cart = require('../../models/Cart.model');
let itemcolor = require('../../models/ItemColor.model');
let Order = require('../../models/Order.model');



router.route('/add').post(function (req,res) {
    let cart = new Cart  (req.body);
        console.log("hi")
    cart.save()
        .then(sup=>{

            itemcolor.findOne({_id:cart.itemId}).then(item => {

                Cart.updateMany({itemId:cart.itemId},{$set: {image:item.image}}).then(sup=>{
                    console.log("image successful");
                    res.status(200).json({'cart':'successful'});
                }).catch(err=>{
                    console.log("itemColor fail");
                    res.status(400).send('fail');
                });
            });
        }).catch(err=>{

        res.status(400).send('fail');
    });


});

router.route('/getDetails/:id').get(function (req, res) {
    console.log("Cart called!")
    let id = req.params.id;

    Cart.find({ userId: id }).exec().then(item => {
        console.log(item)
        res.status(200).json(item)
    })
        .catch(err => {
            console.log("Fail")
            res.status(500).json(err);
        });
});

router.route('/decQuantity/:id/:quantity').get(function (req, res) {
    //console.log("decrement Called!");
    let id = req.params.id;
    //console.log(id );
    let quantity = req.params.quantity;
   //console.log(quantity);
    Cart.updateOne({_id:id},{$set: {quantity:quantity}}).then(sup=>{
        //console.log("successful");
        //res.status(200).json({'cart':'successful'});
    }).catch(err=>{
        //console.log("fail");
        //res.status(400).send('fail');
    });
});

router.route('/incQuantity/:id/:quantity').get(function (req, res) {
    let id = req.params.id;
    let quantity=req.params.quantity;
    Cart.updateOne({_id:id},{$set: {quantity:quantity}}).then(sup=>{
        //console.log("successful");
    }).catch(err=>{
        //console.log("fail");

    });
});

router.route('/deleteItem/:id').get(function (req, res) {
    let id=req.params.id;
    //console.log("Delete Called!");
    Cart.deleteOne({_id:id}).then(sup=>{
      //  console.log("successful");
        res.status(200).json({'cart':'successful'});
    }).catch(err=>{
        //console.log("fail");
        res.status(400).send('fail');
    });
});
router.route('/clearCart/:id').get(function (req, res) {
    let id=req.params.id;
    Cart.deleteMany({userId:id}).then(sup=>{
        //console.log("Clear Cart successful");
        //res.status(200).json({'cart':'successful'});
    }).catch(err=>{
        //console.log("Clear Cart fail");
        //res.status(400).send('fail');
    });
});
router.route('/getSub/:id').get(function (req, res) {
    let id =req.params.id;
    let fullSum=0;
    Cart.find({ userId: id }).exec().then(item => {
        item.forEach(function(items, index, arr) {
            let itemSum=items.cartPrice*items.quantity;
            fullSum=fullSum+itemSum;
        })
        res.json(fullSum);
    })
        .catch(err => {
            console.log("fail")
        });
});
router.route('/addOrder').post(function (req,res) {

    let order=new Order  (req.body);

    order.save().then(sup=>{
       // console.log("image successful");
        res.status(200).json({'order':'successful'});
    }).catch(err=>{
        //console.log("itemColor fail");
        res.status(400).send('fail');
    });
});

router.route('/updateQuantity/:id/:quantity').get(function (req, res) {
    console.log("In the dec")
    let id = req.params.id;
    let quantity=req.params.quantity;
    itemcolor.updateOne({_id:id},{$set: {quantity:quantity}}).then(sup=>{
        console.log("itemColor successful");
        res.status(200).json({'itemColor':'successful'});
    }).catch(err=>{
        console.log("itemColor fail");
        res.status(400).send('fail');
    });
});

router.route('/addPhoto/:id').get(function (req, res) {

    let id = req.params.id;


    itemcolor.findOne({_id:id}).then(item => {

        //console.log(item.image)
        Cart.update({itemId:id},{$set: {image:item.image}}).then(sup=>{
          //  console.log("image successful");
            res.status(200).json({'itemColor':'successful'});
        }).catch(err=>{
            //console.log("itemColor fail");
            res.status(400).send('fail');
        });
    });

});
router.route('/getOrders').get(function (req, res) {

    Order.find( ).exec().then(item => {
        //console.log(item)
        res.status(200).json(item)
    })
        .catch(err => {
          //  console.log("Fail")
            res.status(500).json(err);
        });
});
router.route('/viewOrders/:id').get(function (req, res) {
    let id =req.params.id;
    Order.find({ orderId: id }).exec().then(item => {
        //console.log(item)
        res.status(200).json(item)
    })
        .catch(err => {
          //  console.log("Fail")
            res.status(500).json(err);
        });

});
router.route('/deleteOrders/:id').get(function (req, res) {
    let id=req.params.id;
    Order.deleteMany({orderId:id}).then(sup=>{
        console.log("success")
        res.status(200).json({'order':'successful'});
    }).catch(err=>{
        res.status(400).send('fail');
    });
});
router.route('/checkInCart/:id/:itemSize/:itemId').get(function (req, res) {
    let id =req.params.id;
    let itemSize =req.params.itemSize;
    let itemId=req.params.itemId;
    console.log(id)
    console.log(itemSize)
    console.log(itemId)

    Cart.find({ userId: id,itemId:itemId,itemSize:itemSize}).exec().then(item => {
       console.log("Item")
      console.log(item)
      console.log("Item")
        if(item.length ===0){
            res.status(200).json({'cart':'unavailable'});
        }else{
            res.status(200).json({'cart':'available'});
        }

    })
        .catch(err => {
            console.log("fail")
        });
});
router.route('/getDis/:id').get(function (req, res) {
    let id =req.params.id;
    let fullDis=0;
    Cart.find({ userId: id }).exec().then(item => {
        item.forEach(function(items, index, arr) {
            fullDis=fullDis+(items.itemDiscount*items.quantity);
        })
        res.json(fullDis);
    })
        .catch(err => {
            console.log("fail")
        });
});
module.exports = router;
