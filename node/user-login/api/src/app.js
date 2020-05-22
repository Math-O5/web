'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); 

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

const db = require('../config').mongoURI;

//connect com o banco
mongoose.connect(db,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const User = require('./models/user');

const routesApp = require('./routes/index');
const routesUsers = require('./routes/users');

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain);

// middllewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
// app.use(cors());

// directory
app.use(express.static(path.join(__dirname, 'public')));

// carregar rotas
app.use('/', routesApp);
app.use('/users', routesUsers);

module.exports = app;