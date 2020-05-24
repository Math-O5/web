/*
    Desenvolvido por:
    Nome: Mathias Fernandes
    USP:  10734352
    email: mathfernandes@usp.br
    email2: mathfern4@gmail.com

    Explicação das pastas em  README.md
*/ 
'use strict'

const express = require('express');
const controllerStores = require('../controllers/store-controller');  
const router = express.Router();

router.get('/', controllerStores.get);
router.post('/', controllerStores.post);
router.put('/', controllerStores.put);
router.delete('/', controllerStores.delete);

module.exports = router;
