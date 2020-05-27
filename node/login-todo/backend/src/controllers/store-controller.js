/*
    Desenvolvido por:
    Nome: Mathias Fernandes
    USP:  10734352
    email: mathfernandes@usp.br
    email2: mathfern4@gmail.com

    Explicação das pastas em  README.md
*/ 

'use strict'

const UserStoreModel = require('../models/userstore');
let UserStore = new UserStoreModel();

exports.getKey = (req, res, next) => {
    let message = '';
    let data, status;

    try {
        data = UserStore.getKey(req.body.id);
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

exports.getAll = (req, res, next) => {
    let message = '';
    let data, status;

    try {
        data = UserStore.getAll(req.body.id);
        message = 'Sucess';
        status = 200;
    } catch(e) {
        data = e;
        message = 'Falha ao buscar notas do user';
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
        data = UserStore.add(req.body.id, req.body.key, req.body.value);
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
        data = UserStore.edit(req.body.id, req.body.key, req.body.value);
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
    let id = req.query.id;
    let key = req.query.key;
    try {
        UserStore.remove(id, key);
        message = 'Sucess';
        status = 200;
    } catch(e) {
        data = {"key": key, "o": 2 },
        message = 'Falha ao deletar key-value';
        status = 400;
    } finally {
        res.status(status).send(JSON.stringify({
            data: data,
            message: message,
        }));
    }
}  
