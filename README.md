# api-rest-star-wars

Linguagem: Node.js
Banco: MongoDB


Listagem de todos os planetas: 
GET: http://localhost:3333/planetas

Busca planeta por nome (Header: nome / Value: <nome do planeta>):
GET: http://localhost:3333/planetas

Busca planeta por id (Header: _id / Value: <id do planeta>):
GET: http://localhost:3333/planetas

Outra opção de busca de planeta por id:
GET: http://localhost:3333/planetas/<id do planeta>

Cadastra os planetas com nome, clima, terreno e a quantidade de aparições em filmes (Json:{"nome": "<nome do planeta>"}):
Obs.: clima, terreno e quantidade de aparições são extraídos da API https://swapi.co/
POST: http://localhost:3333/planetas

Remove planeta por nome (Header: nome / Value: <nome do planeta>):
DELETE: http://localhost:3333/planetas

Remove planeta por id (Header: _id / Value: <id do planeta>):
DELETE: http://localhost:3333/planetas
