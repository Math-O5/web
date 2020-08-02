
/**
 * autor: Mathias Fernandes
 * nusp: 10734352
 * email pessoal: mathfern4@gmail.com
 * emailUSP: mathfernandes@usp.br
 */

'use strict'

const express = require('express');
const controllerServices = require('../controllers/service-controller');  
const router = express.Router();

router.get('/', controllerServices.get);
router.get('/:id', controllerServices.getById);
router.get('/slug/:slug', controllerServices.getBySlug);
router.get('/partner/hours/', controllerServices.getByPartnerHours);
router.post('/', controllerServices.post);
router.put('/:id', controllerServices.put);
router.delete('/:id', controllerServices.delete);

module.exports = router;
