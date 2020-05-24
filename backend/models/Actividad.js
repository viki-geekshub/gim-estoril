import mongoose from 'mongoose';
const ActividadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    trainer: {
        type: String,
        required: true
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
        // required: true
    },

}, {
    timestamps: true,
});
export default mongoose.model('Product', ActividadSchema);