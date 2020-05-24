const path = require('path');
const express = require('express');
const newsApiData = require('../js/newsapi.js')
const articlesController = require ('../controllers/articles')

const router = express.Router();

router.use('/', articlesController.renderArticles);

// router.use('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
// });

module.exports = router;
