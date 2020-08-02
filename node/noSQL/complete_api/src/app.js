/**
 * autor: Mathias Fernandes
 * nusp: 10734352
 * email pessoal: mathfern4@gmail.com
 * emailUSP: mathfernandes@usp.br
 */

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

// models
const Product = require('./models/product');
const Client = require('./models/client');
const order = require('./models/order');

// routes
const routesApp = require('./routes/index');
const routesProduct = require('./routes/products');
const routesClients = require('./routes/clients');
const routesOrders = require('./routes/orders');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// carregar rotas
app.use('/', routesApp);
app.use('/products', routesProduct);
app.use('/clients', routesClients);
app.use('/orders', routesOrders);

module.exports = app;