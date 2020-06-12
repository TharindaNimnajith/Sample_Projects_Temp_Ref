const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cashOnDeliverySchema = new Schema({
    deliveryAddress: { type: String, required: true, minlength: 5 },
    contactNumber: { type: Number, required: true, minlength: 5 }
}, {
    timestamps: true,
});

const CashOnDelivery = mongoose.model('CashOnDelivery', cashOnDeliverySchema);

module.exports = CashOnDelivery;