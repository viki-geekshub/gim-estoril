const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const TrainerSchema = new mongoose.Schema({
    name: String,
    surnames: String,
    activity: [String],
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: String,
    tokens: [String],
    comments: [{
        text: String,
        UserId: {
            type: ObjectId,
            ref: 'User'
        },
    }],
    followers: [ObjectId],
    following: [ObjectId]
}, {
    timestamps: true
});
TrainerSchema.methods.toJSON = function(params) {
    const trainer = this._doc;
    delete trainer.tokens;
    delete trainer.password;
    delete trainer.__v;
    return trainer;
}
const Trainer = mongoose.model('Trainer', TrainerSchema);
module.exports = Trainer;