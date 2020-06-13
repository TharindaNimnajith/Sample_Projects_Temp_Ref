const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let StockPrice = require('../../models/StockPrices.model');
let itemcolor = require('../../models/ItemColor.model');

//
// router.route('/add').post(function (req,res) {
//     let stockPrice = new StockPrice(req.body);
//     console.log("ddd"+ stockPrice);
//     stockPrice.save()
//         .then(sup=>{
//             res.status(200).json({'stockPrice':'successful'});
//         }).catch(err=>{
//         res.status(400).send('fail');
//     });
// });

router.route('/add').post(function (req,res) {
    const stockPrice = req.body;
    console.log('LLLLLLLLLLLL')
    console.log(stockPrice)
    console.log('LLLLLLLLLLLL')
        let stockPriceObj = new StockPrice(stockPrice);
        // console.log("StockObject:"+stockPriceObj);
        stockPriceObj.save()
            .then(sup => {
                res.status(200).json({'stockPrice': 'successful'});
            }).catch(err => {
            res.status(400).send('fail');
        });
    // })

});



// router.route('/getAllStockPrice').get(function (req,res) {
//     StockPrice.find(function (err,supplier) {
//         if(!err){
//             res.json(supplier);
//         }else{
//             res.status(400).send('fail');
//         }
//     });
// });
//
// router.route('/updateQuantityPrice/:id/:quantity/:sellingPrice').get(function (req,res) {
//     console.log("Inside Update method");
//     let id = req.params.id;
//     let quantity1 = req.params.quantity;
//     let price = req.params.sellingPrice;
// console.log("quantotyyyyyyyy:"+quantity1);
//     itemcolor.update({_id:id},{$set: {quantity:quantity1,price:price}}).then(sup=>{
//         res.status(200).json({'itemColor':'successful'});
//     }).catch(err=>{
//         res.status(400).send('fail');
//     });
// });


router.route('/updateQuantityPrice/:id/:quantity/:sellingPrice').get(function (req,res) {
    console.log("Inside Update method");
    let id = req.params.id;
    let quantity1 = req.params.quantity;
    let price = req.params.sellingPrice;
    let currentQuantity = 0;

    console.log("id222:"+ req.params.id);
    console.log("quantity222:"+ req.params.quantity);
    console.log("price222:"+ req.params.sellingPrice);


    console.log("id111:"+ id);
    console.log("quantity111:"+ quantity1);
    console.log("price111:"+ price);

    itemcolor.findOne({_id:id}).then(item => {
        currentQuantity=(parseInt(item.quantity)+parseInt(quantity1)) ;
        // let updatedQuantity = currentQuantity + quantity;
        console.log("currentQuantityyy:"+ currentQuantity);
        console.log("ItemQuanttt:"+ item.quantity);


        itemcolor.updateMany({_id:id},{$set: {quantity:currentQuantity,price:price}}).then(sup=>{
            //  console.log("image successful");
            res.status(200).json({'itemColor':'successful'});
        }).catch(err=>{
            //console.log("itemColor fail");
            res.status(400).send('fail');
        });
    });

});


module.exports = router;

