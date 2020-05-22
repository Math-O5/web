'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('../config').mongoURI;

const app = express();
const router = express.Router();



//connect com o banco
// db is the URL do banco
// cadastre uma conta no Mongo db Atlas para testar.
mongoose.connect(db,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });

const Product = require('./models/product');

const routesApp = require('./routes/index');
const routesProduct = require('./routes/products');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// carregar rotas
app.use('/', routesApp);
app.use('/products', routesProduct);

module.exports = app;