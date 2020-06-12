const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    userName: { type: String, required: true, unique: true, minlength: 3 },
    cardNumber: { type: Number, required: true, minlength: 12, maxlength: 12 },
    expiration: { type: Date, required: true },
    cvc: { type: Number, minlength: 3, maxlength: 3 },
}, {
   timestamps: true,
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;