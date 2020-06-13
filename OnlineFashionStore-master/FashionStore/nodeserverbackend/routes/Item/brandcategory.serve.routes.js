const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
let BrandCategory = require('../../models/BrandCategory.model');

router.route('/add').post(function (req, res) {

    const brandCategory = req.body;
    brandCategory.map(bc => {
        let brandc = {
            brandCode: bc.brandCode._id,
            categoryCode: bc.categoryCode._id
        }
        let brandCategoryObj = new BrandCategory(brandc);
        brandCategoryObj.save()
            .then(bc => {
                res.status(200).json({'brandCategory': 'success'});
            }).catch(err => {
            res.status(400).send('faild');
        });
    })

});


router.get("/getBrandCategoryId/:brand_id/:category_id",function (req,res) {
    const brandId = req.params.brand_id;
    const categoryId = req.params.category_id;
    BrandCategory.findOne({ brandCode: brandId, categoryCode: categoryId },)
        .exec()
        .then(brandCategory =>{
            if( brandCategory ){
                res.status(200).json(brandCategory);
            }else{
                res.status(404).json({"message": "not found"});
            }
        })
        .catch(err=>{
            res.status(500).json(err);
        })
});


router.get("/getBrandCategory/:id",function (req,res) {
    const id = req.params.id;

    BrandCategory.findOne({ _id: id}).populate('brandCode').populate('categoryCode')
        .exec()
        .then(brandCategory =>{
            if( brandCategory ){
                res.status(200).json(brandCategory);
            }else{
                res.status(404).json({"message": "not found"});
            }
        })
        .catch(err=>{
            res.status(500).json(err);
        })
});


module.exports = router;
