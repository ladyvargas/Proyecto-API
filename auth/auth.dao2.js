const mongoose = require('mongoose');
const authSchema = require('./model_prodcuto');

authSchema.statics = {
    create_producto: function (data, cb) {
        const produc = new this(data);
        produc.save(cb);
    },
    login: function (query, cb) {
        this.find(query, cb);
    }
}

const authModel2 = mongoose.model('productos', authSchema);
module.exports = authModel2;
