const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const  autoIncrement = require('mongoose-auto-increment');

let itemSize = new Schema({
    sizeId: { type: Number},
    sizeName :{
        type :String,
        required: true
    }
});
autoIncrement.initialize(mongoose.connection)
itemSize.plugin(autoIncrement.plugin, { model: 'ItemSize', field: 'sizeId' });
module.exports = mongoose.model('ItemSize',itemSize);
