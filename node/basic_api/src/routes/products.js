'use strict'

const express = require('express');
const controllerProducts = require('../controllers/product-controller');  
const router = express.Router();

router.get('/', controllerProducts.get);
router.get('/admin/:id', controllerProducts.getById);
router.get('/:slug', controllerProducts.getBySlug);
router.post('/', controllerProducts.post);
router.put('/:id', controllerProducts.put);
router.delete('/', controllerProducts.delete);

module.exports = router;
