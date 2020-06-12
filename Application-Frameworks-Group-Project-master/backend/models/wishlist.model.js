const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const wishlistSchema = new Schema({
    itemId: {type: Number, required: true},
    itemName: {type: String, required: true},


}, {
    timestamps: true
});

const wishlistItem = mongoose.model('wishlistItem', wishlistSchema);

module.exports = wishlistItem;