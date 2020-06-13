const mongoose = require('mongoose');
const Schema= mongoose.Schema;
// const  autoIncrement = require('mongoose-auto-increment');

let brandCategory = new Schema({
    // brandCategoryId: { type: Number},
    brandCode :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Brand",
        required : true
    }],
    categoryCode :[{
        type :mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required : true
    }]
});
// autoIncrement.initialize(mongoose.connection)
// brandCategory.plugin(autoIncrement.plugin, { model: 'BrandCategory', field: 'brandCategoryId' });
module.exports = mongoose.model('BrandCategory',brandCategory);
