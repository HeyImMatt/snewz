require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.static('public'));

app.use('/', (req, res, next) => {
  res.sendFile('index.html', {root: 'public'})
})

app.listen(3000, () =>{
  console.log('Listening on port 3000');
})