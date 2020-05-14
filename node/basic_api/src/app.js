'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const routesApp = require('./routes/index');
const Product = require('./models/product');
const mongoose = require('mongoose');
const routesProduct = require('./routes/products');

const app = express();
const router = express.Router();



//connect com o banco
mongoose.connect('mongodb+srv://<username>:<password>a@cluster0-lcyw1.mongodb.net/test');


// carregar rotas
app.use('/', routesApp);
app.use('/products', routesProduct);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

module.exports = app;