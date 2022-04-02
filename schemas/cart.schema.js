const mongoose = require('mongoose');
const { productSchema } = require('./product.schema');

const Schema = mongoose.Schema;

const collection = 'carts';
const cartSchema = new Schema({
    products: { type: [productSchema], required: true },
    timestamp: { type: Date, default: Date.now, required: false },
});

module.exports = {
    Cart: mongoose.model(collection, cartSchema),
    cartSchema: cartSchema
};