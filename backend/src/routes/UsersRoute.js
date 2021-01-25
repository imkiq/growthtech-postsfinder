const express = require('express');
const router = express.Router();
const api = require('../config/api');
const { getUsers, getPostsByUser } = require('../controllers/UsersController');

router.get('/', getUsers);
router.get('/:id/posts', getPostsByUser);

module.exports = router;