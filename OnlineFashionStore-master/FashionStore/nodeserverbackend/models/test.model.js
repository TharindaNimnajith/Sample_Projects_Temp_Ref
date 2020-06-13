const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let testTable = new Schema({
    testCode :{
        type :String
    },
    testName :{
        type :String
    }
});

module.exports = mongoose.model('TestTable',testTable);
