const router = require('express').Router();
let CartItem = require('../../models/user/cartItem.model');

router.route('/').get((req, res) => {
    CartItem.find()
        .then(cartItems => res.json(cartItems))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const itemId = Number(req.body.itemId);
    const itemName = req.body.itemName;
    const price = Number(req.body.price);
    const discount = Number(req.body.discount);
    const quantity = Number(req.body.quantity);
    const totalPrice = Number(req.body.totalPrice);

    const newCartItem = new CartItem({
        itemId,
        itemName,
        price,
        discount,
        quantity,
        totalPrice,
    });

    newCartItem.save()
        .then(() => res.json('Product added to the shopping cart!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    CartItem.findById(req.params.id)
        .then(cartItem => res.json(cartItem))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    CartItem.findByIdAndDelete(req.params.id)
        .then(() => res.json('Added Product has been deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
    CartItem.findById(req.params.id)
        .then(cartItem => {

            cartItem.quantity = req.body.quantity;
            cartItem.totalPrice = req.body.totalPrice;


            cartItem.save()
                .then(() => res.json('Product Quantity has been updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;