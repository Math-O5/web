'use strict'

const express = require('express');
const controllerUsers = require('../controllers/user-controller');  
const router = express.Router();

router.get('/', controllerUsers.get);
router.get('/:username', controllerUsers.getByUsername);
router.get('/admin/:id', controllerUsers.getById);
router.post('/', controllerUsers.post);
router.delete('/:id', controllerUsers.delete);
// router.get('/:slug', controllerUsers.getBySlug);
// router.get('/tags/:tag', controllerUsers.getBySTag);
// router.put('/:id', controllerUsers.put);

module.exports = router;
