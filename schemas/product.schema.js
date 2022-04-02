const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const collection = 'products';
const productSchema = new Schema({
    title: { type: 'string', required: true },
    price: { type: 'number', required: true },
    thumbnail: { type: 'string', required: true },
});

module.exports = {
    Product: mongoose.model(collection, productSchema),
    productSchema
}