/*
    Desenvolvido por:
    Nome: Mathias Fernandes
    USP:  10734352
    email: mathfernandes@usp.br
    email2: mathfern4@gmail.com

    Explicação das pastas em  README.md
*/ 

'use strict'

const StoreModel = require('../models/store');
let Store = new StoreModel();

exports.get = (req, res, next) => {
    let message = '';
    let data, status;

    try {
        data = Store.get(req.body.key);
        message = 'Sucess';
        status = 200;
    } catch(e) {
        data = e;
        message = 'Falha ao buscar key-value';
        status = 400;
    } finally {
        res.status(status).send(JSON.stringify({
            data: data,
            message: message,
        }));
    }
}   

exports.post = (req, res, next) => {
    let message = '';
    let data, status;

    try {
        data = Store.add(req.body.key, req.body.value);
        message = 'Sucess';
        status = 200;
    } catch(e) {
        data = e;
        message = 'Falha ao adicionar key-value';
        status = 400;
    } finally {
        res.status(status).send(JSON.stringify({
            data: data,
            message: message,
        }));
    }
}  

exports.put = (req, res, next) => {
    let message = '';
    let data, status;

    try {
        data = Store.add(req.body.key, req.body.value);
        message = 'Sucess';
        status = 200;
    } catch(e) {
        data = e;
        message = 'Falha ao editar key-value';
        status = 400;
    } finally {
        res.status(status).send(JSON.stringify({
            data: data,
            message: message,
        }));
    }
}  

exports.delete = (req, res, next) => {
    let message = '';
    let data, status;

    try {
        data = Store.delete(req.body.key);
        message = 'Sucess';
        status = 200;
    } catch(e) {
        data = e;
        message = 'Falha ao deletar key-value';
        status = 400;
    } finally {
        res.status(status).send(JSON.stringify({
            data: data,
            message: message,
        }));
    }
}  
