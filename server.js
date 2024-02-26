const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.set('view engine', 'pug');
path.join(__dirname, '/views');

let rootUrl = process.env.DEVELOPMENT_ROOT_URL;
if (process.env.NODE_ENV === 'production') rootUrl = process.env.PRODUCTION_ROOT_URL;

app.get(`${rootUrl}/`, (req, res) => {
  res.render('main', { env: process.env.NODE_ENV });
});

app.get(`${rootUrl}/api/test`, (req, res) => {
  res.send({
    message: 'API data is rendered successfully',
  });
});

const port = process.env.PORT;
app.listen(port, err => {
  console.log(`App listening on port: ${port}`);
});
