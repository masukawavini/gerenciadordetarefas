require('dotenv').config();

const express = require('express');
const app = express();

const routes = require('./routes.js');

app.use('/', routes);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/client/main.html');
});

app.listen(3000, () => {
	console.log('Servidor rodando');
});
