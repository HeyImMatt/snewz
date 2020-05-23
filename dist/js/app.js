require('dotenv').config();

const express = require('express');
const helmet = require('helmet')
const path = require('path');
const homeRoutes = require('../routes/home.js');

const app = express();

app.use(helmet());

app.use(express.static(path.join(__dirname, '../..', 'public')));

app.use(homeRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});
