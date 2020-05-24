/*
    Desenvolvido por:
    Nome: Mathias Fernandes
    USP:  10734352
    email: mathfernandes@usp.br
    email2: mathfern4@gmail.com

    Explicação das pastas em  README.md
*/ 
'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const Store = require('./models/store');

const routesApp = require('./routes/index');
const routesStore = require('./routes/stores');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// carregar rotas
app.use('/', routesApp);
app.use('/store', routesStore);

module.exports = app;