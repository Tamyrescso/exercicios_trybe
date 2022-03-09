const express = require('express');
const bookController = require('./controllers/bookController');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/book', bookController);

app.listen(process.env.PORT, () => console.log('Ouvindo na porta 3000'));



