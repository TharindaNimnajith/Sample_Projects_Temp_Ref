const router = require('express').Router();
let Categories = require('../../models/admin/Category');

/**
 * use to add categories
 * checking whether the new category is added before
 * if it not added previously
 * adding new category to database
 * if it added previously
 * display an error message
 * */
router.route('/addCategory').post((req, res) => {
    const categoryname = req.body.categoryname;
    if (!categoryname){
        return res.send({
            success: false,
            message: 'Categories Name can not be blank.'
        });
    }
    //console.log('here');
    Categories.find({
        categoryname: categoryname
    },(err, previousCategories) =>{
        if(err){
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }
        else if(previousCategories.length > 0){
            return res.send({
                success: false,
                message: 'this category is also exist.'
            });
        }
        else{
            const newCategoryDetails = new Categories({
                categoryname,
            });
            newCategoryDetails.save((err, category) => {
                if(err){
                    return res.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'new category added.'
                });
            })
        }
    });
});

/**
 * In here
 * get all categories
 * */
router.route('/get').post((req, res) =>{
    Categories.find()
        .then(categories => res.json(categories))
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;