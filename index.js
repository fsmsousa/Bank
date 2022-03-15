const express = require('express');
const app = express();

const controller = require('./lib/controller.js');

app.listen(3000, () => 
console.log('Servidor iniciado na porta 3000')
);

app.get('/cont', controller);