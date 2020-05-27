// Desenvolvido por:
// Nome: Mathias Fernandes
// USP:  10734352
// email: mathfernandes@usp.br
// email2: mathfern4@gmail.com

// Questões e explicação das pastas em  README.md
'use strict'

const express = require('express');
const router = express.Router();
  
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

module.exports = router;

