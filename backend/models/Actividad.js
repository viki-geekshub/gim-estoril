const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const ActividadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    trainer: {
        type: [ObjectId],
        required: true,
        ref: 'User'
    },
    day: {
        type: String,
        required: true
    },
    horario: {
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
const Actividad = mongoose.model('Actividad', ActividadSchema)
module.exports = Actividad