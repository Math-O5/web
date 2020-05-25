'use strict'

const express = require('express');
const controllerProducts = require('../controllers/product-controller');  
const router = express.Router();
const authService = require('../services/auth-service');

router.get('/', authService.authorize, controllerProducts.get);
router.post('/', authService.authorize, controllerProducts.post);

module.exports = router;
