'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const router = express.Router();

//app.use(cors({origin: '*'}));
app.use(function (req, res, next) {
    res.setHeader('access-control-allow-origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//connect com o banco
mongoose.connect('mongodb+srv://xjamaicax:jamaicajamaica@cluster0-lcyw1.mongodb.net/test',  {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const User = require('./models/user');

const routesApp = require('./routes/index');
const routesUsers = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

// carregar rotas
app.use('/', routesApp);
app.use('/users', routesUsers);

module.exports = app;