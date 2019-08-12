
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rotas = require('./rotas');
const server = express();

mongoose.connect('mongodb+srv://banco:banco1@cluster0-x3jvl.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(rotas);
server.listen(3333);

