'use strict'

const express = require('express');
const controllerClients = require('../controllers/client-controller');  
const router = express.Router();

router.get('/', controllerClients.get);
router.post('/', controllerClients.post);
router.post('/authenticate', controllerClients.authenticate);

module.exports = router;
