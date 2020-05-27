'use strict'

const express = require('express');
const authService = require('../services/auth-service');
const controllerUsers = require('../controllers/user-controller');  
const router = express.Router();

// router.get('/', controllerUsers.get);
router.get('/:username',  authService.authorize, controllerUsers.getByUsername);
router.delete('/delete/:id', authService.authorize, controllerUsers.delete);
router.post('/newUser/register', controllerUsers.register);
router.post('/login', controllerUsers.authenticate);

module.exports = router;
