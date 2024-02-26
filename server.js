const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.set('view engine', 'pug');
path.join(__dirname, '/views');

app.get('/', (req, res) => {
  res.render('main');
});

app.get('/api/test', (req, res) => {
  res.send({
    message: 'API data is rendered successfully',
  });
});

const port = process.env.PORT;
app.listen(port, err => {
  console.log(`App listening on port: ${port}`);
});
