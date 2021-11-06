const {Schema, model} = require('mongoose');

const Item = new Schema({
    name: {type: String, unique: true, required: true},
    count: {type: Number, required: true},
    price: {type: String, required: true},
})

module.exports = model('Item', Item);