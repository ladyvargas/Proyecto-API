const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const userSchema2 = new Schema({
    Id_Producto: {
        type: String,
        required: true,
        trim: true
    },
    name_producto: {
        type: String,
        required: true,
        trim: true
    },
    description_producto: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = userSchema2;
