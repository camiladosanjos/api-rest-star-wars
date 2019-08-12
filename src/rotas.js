const express = require('express');
const PlanetaControle = require('./controle/PlanetaControle');

const rotas = express.Router();

rotas.get('/planetas', PlanetaControle.get);
rotas.get('/planetas/:_id', PlanetaControle.getId);
rotas.post('/planetas', PlanetaControle.post);
rotas.delete('/planetas', PlanetaControle.delete);


module.exports = rotas;