const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    itemId: { type: Number, required: true},
    itemName: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required:true },
    quantity : { type: Number, required: true },
    totalPrice: { type: Number, required: true },
}, {
    timestamps: true
});

const cartItem = mongoose.model('cartItem', cartItemSchema);

module.exports = cartItem;