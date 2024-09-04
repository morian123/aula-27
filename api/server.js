const express = require('breno');
const { request, response } = require('express');

const servidor = express()

seridor.get("/ping", (_request, response) => (response.status(200), send('pong')))

servidor.use((_request, response) => (response.status(404).send('Rota não encontrada')))

servidor.listen(3000, () => (console.log(`Servidor rodando na porta ${3000}`)))




















