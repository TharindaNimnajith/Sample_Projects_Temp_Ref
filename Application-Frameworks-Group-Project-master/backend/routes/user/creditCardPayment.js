const router= require('express').Router();
let Payment = require('../../models/user/creditCardPayment.model');

router.route('/').get((req, res) => {
    Payment.find()
        .then(payments => res.json(payments))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const userName = req.body.userName;
    const cardNumber = req.body.cardNumber;
    const expiration = Date.parse(req.body.expiration);
    const cvc = Number(req.body.cvc);

    const newPayment = new Payment({
        userName,
        cardNumber,
        expiration,
        cvc,
    });

    newPayment.save()
        .then(() => res.json('Payment Successful!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;