const ContainerMongodb = require('../../models/ContainerMongodb');
const { Product } = require('../../schemas/product.schema');

class ProductMongodbDaos extends ContainerMongodb {
    constructor() {
        super(Product);
    }
}

module.exports = ProductMongodbDaos;