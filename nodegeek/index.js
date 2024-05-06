const express = require('express'); // Importa o framework Express
const server = express(); // Cria uma instância do Express
const geeksRoutes = require('./routes/routesG'); // Importa as rotas definidas em geeksRoutes.js

server.use(express.json()); // Habilita o servidor para receber e enviar respostas em formato JSON

server.use(geeksRoutes); // Usa as rotas importadas no servidor
const port = 3000; // Define a porta em que o servidor será executado
server.listen(port, () => { // Inicia o servidor na porta especificada
console.log(`Aplicação rodando em http://localhost:${port}`); //Exibe uma mensagem no console quando o servidor estiver rodando
});