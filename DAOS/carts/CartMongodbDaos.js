const ContainerMongodb = require('../../models/ContainerMongodb');
const { Cart } = require('../../schemas/cart.schema');

class CartMongodbDaos extends ContainerMongodb {
    constructor() {
        super(Cart);
    }
}

module.exports = CartMongodbDaos;