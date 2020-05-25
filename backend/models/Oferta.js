const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const OfertaSchema = new mongoose.Schema({
    offer: {
        type: String,
        required: true
    },
    expiration: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image_path: {
        type: String,
    },
}, {
    timestamps: true,
});
const Oferta = mongoose.model('Oferta', OfertaSchema)
module.exports = Oferta