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

router.get('/', controllerProducts.get);
router.get('/admin/:id', controllerProducts.getById);
router.get('/:slug', controllerProducts.getBySlug);
router.get('/tags/:tag', controllerProducts.getBySTag);
router.post('/', authService.authorize, controllerProducts.post);
router.put('/:id', authService.authorize, controllerProducts.put);
router.delete('/:id', authService.authorize, controllerProducts.delete);

module.exports = router;
