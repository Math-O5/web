'use strict'

const express = require('express');
const controllerUsers = require('../controllers/user-controller');  
const router = express.Router();

router.get('/', controllerUsers.get);
router.get('/:username', controllerUsers.getByUsername);
router.post('/newUser/register', controllerUsers.register);
router.post('/login', controllerUsers.login);

module.exports = router;
