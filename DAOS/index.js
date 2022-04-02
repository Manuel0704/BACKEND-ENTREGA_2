const CartMongodbDaos = require('./carts/CartMongodbDaos');
const ProductMongodbDaos = require('./products/ProductMongodbDaos');
const CartFirebaseDaos = require('./carts/CartFirebaseDaos');
const ProductFirebaseDaos = require('./products/ProductFirebaseDaos');

//COMENTAR una de las 2 lineas dependiendo del sistema de bases de datos
// const dbSystem = 'mongodb';
const dbSystem = 'firebase';

if(dbSystem === 'mongodb') {
    module.exports = {
        ProductDaos: new ProductMongodbDaos(),
        CartDaos: new CartMongodbDaos()
    };
} else if(dbSystem === 'firebase') {
    module.exports = {
        ProductDaos: new ProductFirebaseDaos(),
        CartDaos: new CartFirebaseDaos()
    };
    
}