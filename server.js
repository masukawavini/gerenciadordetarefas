require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.post('/adicionar-tarefa', (req, res) => {
  const { titulo, descricao } = req.body;
  // Aqui você adiciona a lógica para criar a nova tarefa no banco de dados, por exemplo:
  const novaTarefa = { id: 1, titulo, descricao };
  // Depois de criar a tarefa, você pode retornar os dados dela em um JSON
  res.json(novaTarefa);
});

app.listen(3000, () => {
        console.log('Servidor rodando');
});

