'use strict';

const express = require('express');
const superagent = require('superagent');
require('dotenv').config();

const app = express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3001;

app.get('/', (request, response) => {
  response.render('index');
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));