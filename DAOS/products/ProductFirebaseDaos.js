const ContainerFirebase = require('../../models/ContainerFirebase');

class ProductFirebaseDaos extends ContainerFirebase {
    constructor() {
        super("products", "instance_products");
    }
}

module.exports = ProductFirebaseDaos;