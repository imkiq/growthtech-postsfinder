const express = require('express');
const router = express.Router();
const api = require('../config/api');
const { getPosts, getPostById } = require('../controllers/PostsController');

router.get('/', getPosts);
router.get('/:id', getPostById);

module.exports = router;