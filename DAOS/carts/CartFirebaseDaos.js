const ContainerFirebase = require('../../models/ContainerFirebase');

class CartFirebaseDaos extends ContainerFirebase {
    constructor() {
        super("carts", "instance_carts");
    }
}

module.exports = CartFirebaseDaos;