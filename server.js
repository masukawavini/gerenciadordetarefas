require('dotenv').config();

const express = require('express');
const app = express();

const routes = require('./routes.js');

app.use('/', routes);

app.listen(3000, () => {
	console.log('Servidor rodando');
});
