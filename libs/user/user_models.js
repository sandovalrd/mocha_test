const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: [true, 'El nombre es obligatorio'] },
    lastname: { type: String, required: [true, 'El apellido es obligatorio'] },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('users', userSchema);