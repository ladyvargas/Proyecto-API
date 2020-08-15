const mongoose = require('mongoose');

mongoose.connect('mongodb://ladyVS:Llvs0987654321@104.214.48.167:27017/Pedidos?authSource=admin')
    .then(() => {

        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log('La conexión a MongoDB se ha realizado correctamente!!');
    })
    .catch(err => console.log(err));
// Si no se conecta correctamente escupimos el error

module.exports = mongoose;
