const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const mentionsController = require('../controllers/mentions-controller');

//rota para listar menções
router.get('/', mentionsController.listMentions);

//rota para salvar menções
router.post('/',[
    check('friend').isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
    check('mention').isLength({ min: 20, max: 280 }).withMessage("A menção precisa ter no mínimo 20 caracteres e no máximo 280.")
], mentionsController.createMention);

//rota para atualizar menções
router.put('/:id',[
    check('friend').optional().isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres."),
    check('mention').optional().isLength({ min: 20, max: 280 }).withMessage("A menção precisa ter no mínimo 20 caracteres e no máximo 280.")
], 
mentionsController.updateMention);

//rota para excluir menções
router.delete('/:id', mentionsController.deleteMention);

module.exports = router;