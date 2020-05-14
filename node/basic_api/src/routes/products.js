'use strict'

const express = require('express');
const controllerProducts = require('../controllers/product-controller');  
const router = express.Router();

router.post('/', controllerProducts.post);
router.put('/:id', controllerProducts.put);
router.delete('/', controllerProducts.delete);

module.exports = router;
