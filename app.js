const express = require('express');
const helmet = require('helmet')
const path = require('path');
const bodyParser = require('body-parser');
const homeRoutes = require('./src/routes/home.js');
const mongoConnect = require('./src/util/database').mongoConnect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views')

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);

// app.listen(process.env.PORT || 3000, () => {
// });

mongoConnect( () => {
  app.listen(process.env.PORT || 3000)
})