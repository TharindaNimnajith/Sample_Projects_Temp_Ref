const router= require('express').Router();
let CashOnDelivery = require('../../models/user/cashOnDelivery.model');

router.route('/').get((req, res) => {
    CashOnDelivery.find()
        .then(cashOnDeliveries => res.json(cashOnDeliveries))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const deliveryAddress = req.body.deliveryAddress;
    const contactNumber = Number(req.body.contactNumber);

    const newCashOnDelivery = new CashOnDelivery({ deliveryAddress, contactNumber});

    newCashOnDelivery.save()
        .then(() => res.json('Delivery Address Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    CashOnDelivery.findById(req.params.id)
        .then(CashOnDelivery => res.json(CashOnDelivery))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    CashOnDelivery.findByIdAndDelete(req.params.id)
        .then(() => res.json('Cash on delivery has been deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').put((req, res) => {
    CashOnDelivery.findById(req.params.id)
        .then(CashOnDelivery => {

            CashOnDelivery.deliveryAddress = req.body.deliveryAddress;
            CashOnDelivery.contactNumber = req.body.contactNumber;


            CashOnDelivery.save()
                .then(() => res.json('Cash On Delivery has been updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;