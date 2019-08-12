const { Schema, model } = require('mongoose');

const PlanetaBancoDeDados = new Schema({
    nome: {
        type: String,
        required: true,
    },
    clima: {
        type: String,
        required: true,
    },
    terreno: {
        type: String,
        required: true,
    },
    quantideAparicoes: {
        type: Number,
        required: false,
    },
}, {
        timestamps: true,
    });

module.exports = model('Planeta', PlanetaBancoDeDados);
