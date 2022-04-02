const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
const serviceAccount = require("../db/firebase.config.json");

class ContainerFirebase {
    constructor(collection, instanceName) {
        const app = admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        }, instanceName);
        const db = getFirestore(app);
        this.mainQuery = db.collection(collection);
    }
    getAll = async () => {
        try {
            const querySnapshot = await this.mainQuery.get();
            const docs = querySnapshot.docs;
            return docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                };
            });
        } catch (error) {
            console.log(error);
        }
    }
    getById = async id => {
        try {
            const getdoc = await this.mainQuery.doc(id).get();
            return {
                id: getdoc.id,
                ...getdoc.data()
            };
        } catch (error) {
            console.log(error);
        }
    }
    createDoc = async doc => {
        try {
            const newDoc = this.mainQuery.doc();
            await newDoc.create(doc);
            const docData = await newDoc.get();
            return {
                id: await docData.id,
                ...docData.data()
            };
        } catch (error) {
            console.log(error);
        }
    }
    updateDoc = async (id, doc) => {
        try {
            const updateDoc = this.mainQuery.doc(id);
            await updateDoc.update(doc);
            const docData = await updateDoc.get();
            return {
                id,
                ...docData.data()
            };
        } catch (error) {
            console.log(error);
        }
    }
    deleteDoc = async id => {
        try {
            const deletedDoc = this.mainQuery.doc(id);
            return deletedDoc.delete();
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ContainerFirebase;