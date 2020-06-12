const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const finalPaymentSchema = new Schema({

    finalPayment: { type: Number, required: true },
}, {
    timestamps: true
});

const finalPayment = mongoose.model('finalPayment', finalPaymentSchema);

module.exports = finalPayment;