const mongoose = require('mongoose');

class ContainerMongodb {
    constructor(modelSchema) {
        this.modelSchema = modelSchema;
        const URI = `mongodb+srv://manuel:OGP46QElnzkCTaNV@codercluster.geqht.mongodb.net/ecommerce?retryWrites=true&w=majority`;
        mongoose.connect(URI).then(() => console.log('Database is connected')).catch(err => console.log(err));
    }
    getAll = async () => {
        return this.modelSchema.find();
    }
    getById = async id => {
        const docs = await this.getAll();
        return docs.find(doc => doc._id == id);
    }
    createDoc = async doc => {
        return this.modelSchema.create(doc);
    }
    updateDoc = async (id, doc) => {
        return this.modelSchema.updateOne({ _id: id }, { $set: { ...doc } });
    }
    deleteDoc = async id => {
        return this.modelSchema.deleteOne({ _id: id });
    }
}

module.exports = ContainerMongodb;