const { ProductDaos, CartDaos } = require('./DAOS/index');

(async () => {
    //**IR AL INDEX.JS DE LA CARPETA DAOS Y ESCOGER LA BASE DE DATOS QUE QUIERAS USAR(MONGODB O FIREBASE)

    //*SI USAS MONGO DESCOMENTAR ESTE BLOQUE
    // const response1 = await ProductDaos.getAll();
    // console.log(response1);
    // const response2 = await CartDaos.getAll();
    // console.log(response2);

    //*SI USAS FIREBASE DESCOMENTAR ESTE BLOQUE
    const response1 = await ProductDaos.getAll();
    console.log(response1);
    const response2 = await CartDaos.getAll();
    console.log(response2);
})()