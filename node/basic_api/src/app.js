'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();



//connect com o banco
mongoose.connect('mongodb+srv://xjamaicax:jamaicajamaica@cluster0-lcyw1.mongodb.net/test',  {
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