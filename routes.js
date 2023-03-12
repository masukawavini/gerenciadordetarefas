const express = require('express');
const router = express.Router();

const tarefas = [
  { titulo: 'Comprar pão', descricao: 'Ir até a padaria e comprar pão' },
  { titulo: 'Lavar roupa', descricao: 'Separar as roupas e colocar na máquina' },
  { titulo: 'Estudar para a prova', descricao: 'Revisar as anotações e fazer exercícios' }
];

const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/main.html'));
});

router.get('/tarefas', (req, res) => {
  res.send(tarefas);
});

router.post('/adicionar-tarefa', (req, res) => {
  const { titulo, descricao } = req.body;
  const novaTarefa = { titulo, descricao };
  tarefas.push(novaTarefa);
  res.send(novaTarefa);
});

module.exports = router;

