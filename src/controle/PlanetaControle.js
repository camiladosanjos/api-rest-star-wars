const axios = require('axios');
const Planeta = require('../modelo/Planeta');

module.exports = {

    async  get(req, res) {
        const { nome, _id } = req.headers;

        if (_id != null) {
            const encontradoPlaneta = await Planeta.findById({ _id });
            return res.json(encontradoPlaneta);
        }

        if (nome != null) {
            const encontradoPlaneta = await Planeta.findOne({ "nome": nome });
            return res.json(encontradoPlaneta);
        }

        const encontradoPlaneta = await Planeta.find();
        return res.json(encontradoPlaneta);
    },


    async  getId(req, res) {

        const { _id } = req.params;
        const encontradoPlaneta = await Planeta.findById({ _id });
        return res.json(encontradoPlaneta);

    },


    async post(req, res) {
        const { nome: nomereq } = req.body;

        const nomePlanetaExiste = await Planeta.findOne({ "nome": nomereq });

        if (nomePlanetaExiste) {
            return res.json(nomePlanetaExiste);
        }

        const response = await axios.get(`https://swapi.co/api/planets/`);

        const { results } = response.data;

        for (var { name: nome, climate: clima, terrain: terreno, films: filmes } of results) {

            qtdfilmes = filmes.length;

            if (nomereq == nome) {

                const planeta = await Planeta.create({
                    nome,
                    clima,
                    terreno,
                    quantideAparicoes: qtdfilmes
                });
                return res.json(planeta);
            }

        }
        return res.status(400).json({ error: 'Planeta não existe' });

    },

    async delete(req, res) {
        const { nome, _id } = req.headers;

        if (_id != null) {
            const encontradoPlaneta = await Planeta.findByIdAndDelete({ _id });
            return res.json(encontradoPlaneta);
        }

        if (nome != null) {
            const encontradoPlaneta = await Planeta.findOneAndDelete({ "nome": nome });
            return res.json(encontradoPlaneta);
        }
        return res.status(400).json({ error: 'Propriedade (_id ou nome) não definida' });
    }

}