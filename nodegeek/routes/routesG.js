const express = require("express");
const router = express.Router();
const geeksController = require('../controller/controllerG')

// Rota para listar todos os geeks
router.get('/geeks', geeksController.listGeeks);

// Rota para obter um geek específico
router.get('/geeks/:index', geeksController.getGeek);

// Rota para adicionar um novo geek
router.post('/inclueg', geeksController.addGeek);

// Rota para atualizar um geek existente
router.put('/alterag/:index', geeksController.updateGeek);

// Rota para excluir um geek
router.delete('/deletag/:index', geeksController.deleteGeek);

module.exports = router;