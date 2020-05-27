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
const authService = require('../services/auth-service');
const router = express.Router();

router.get('/', authService.authorize, controllerStores.getAll);
router.get('/note', authService.authorize, controllerStores.getKey);
router.post('/', authService.authorize, controllerStores.post);
router.put('/', authService.authorize, controllerStores.put);
router.delete('/', authService.authorize, controllerStores.delete);

module.exports = router;
