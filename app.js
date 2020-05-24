//require('dotenv').config();

const express = require('express');
const helmet = require('helmet')
const path = require('path');
const homeRoutes = require('./src/routes/home.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views')

app.use(helmet());

app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);

app.listen(process.env.PORT || 3000, () => {
});
