const router = require('express').Router();
let FinalPayment = require('../models/finalPayment.model');

router.route('/').get((req, res) => {
    FinalPayment.find()
        .then(finalPayment => res.json(finalPayment))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const finalPayment = Number(req.body.finalPayment);

    const newFinalPayment = new FinalPayment({
        finalPayment,
    });

    newFinalPayment.save()
        .then(() => res.json('Final Payment amount added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;