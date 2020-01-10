const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for blog

let crud = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    comment: {
        type: String
    }
},{
    collection: 'crud'
});

module.exports = mongoose.model('crud', crud);