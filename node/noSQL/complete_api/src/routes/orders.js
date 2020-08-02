/**
 * autor: Mathias Fernandes
 * nusp: 10734352
 * email pessoal: mathfern4@gmail.com
 * emailUSP: mathfernandes@usp.br
 */

'use strict'

const express = require('express');
const controllerProducts = require('../controllers/product-controller');  
const router = express.Router();
const authService = require('../services/auth-service');

router.get('/', authService.authorize, controllerProducts.get);
router.post('/', authService.authorize, controllerProducts.post);

module.exports = router;
