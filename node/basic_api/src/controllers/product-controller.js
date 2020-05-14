'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.post = (req, res, next) => {
    let prod = new Product(req.body);
    prod.save()
        .then(_ => {
            res.status(201).send({
                message: 'Product cadastrado com sucesso!'
            });
        }).catch(e =>  {
            res.status(400).send({
                message: 'Falha ao cadastrar produto',
                data: req.body
            });
        });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id, 
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};