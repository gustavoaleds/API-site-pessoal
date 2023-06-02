const express = require('express');
const projetosController = require('../controllers/projetosController')
const router = express.Router();

router.get('/', projetosController.getAllProjetos);
router.get('/:id', projetosController.getProjetoById);
router.post('/', projetosController.createProjeto);
router.put('/:id', projetosController.updateProjeto);
router.delete('/:id', projetosController.deleteProjeto);

module.exports = router;