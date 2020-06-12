const router = require('express').Router();
let WishlistItem = require('../models/wishlist.model');


router.route('/').get((req, res) => {
    WishlistItem.find()
        .then(wishlistItems => res.json(wishlistItems))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const itemId = Number(req.body.itemId);
    const itemName = req.body.itemName;

    const newWishlistItem = new WishlistItem({
        itemId,
        itemName,

    });

    newWishlistItem.save()
        .then(() => res.json('Product added to the WishList!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {
    WishlistItem.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product has been deleted from WishList!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;