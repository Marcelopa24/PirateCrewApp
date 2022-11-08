const mongoose = require("mongoose");

const EsquemaPirate = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre obligatorio"],
        minLength: [3, "Nombre debe tener al menos 3 caracteres"]
    },
    imagen: {
        type: String,
        required: [true, "Nombre obligatorio"],
    },
    frase: {
        type: String,
        required: [true, "Frase requerida"],
    },
    chest: {
        type: Number
    },
    crewPosition: {
        type: String
    },
    pegleg: {
        type: Boolean
    },
    eyepatch: {
        type: Boolean
    },
    hookhand: {
        type: Boolean
    },

}, {timestamps: true, versionKey:false})
//timestamps: true es para createdAt y updatedAt
//versionKey: false es para eliminar un campo _v

const Pirate = mongoose.model("pirates", EsquemaPirate);
module.exports = Pirate;