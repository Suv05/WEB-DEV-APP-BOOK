const mongoose = require('mongoose');
const itemSchema = require('./itemModel');


const listSchema = new mongoose.Schema({
    name: String,
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]

});

const List = mongoose.model('List', listSchema);

module.exports = List;