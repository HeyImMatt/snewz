const path = require('path');
const express = require('express');
const articlesController = require ('../controllers/articles')

const router = express.Router();

router.get('/', articlesController.renderArticles);

router.post('/', articlesController.filterArticles);

module.exports = router;
