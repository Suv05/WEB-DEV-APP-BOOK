const mongoose = require('mongoose');
const itemSchema = require('./itemModel');


const listSchema = new mongoose.Schema({
    name: String,
    item: [itemSchema]

});

const List = mongoose.model('List', listSchema);

module.exports=List;