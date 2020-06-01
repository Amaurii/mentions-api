const express = require('express');
const router = express.Router();

//Rota inicial da aplicação
router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'API com Menções Interessantes',
    version: '1.0.0'
  });
});

module.exports = router;