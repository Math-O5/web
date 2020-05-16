'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product
        .find({active: true}, 'title slug price') //all
        .then(data => {
            res.status(200).send({data});
        }).catch(e =>  {
            res.status(400).send({
                message: 'Falha ao buscas produtos',
                data: e
            });
        });
}

exports.getById = (req, res, next) => {
    Product
        .findById(req.params.id) 
        .then(data => {
            res.status(200).send({data});
        }).catch(e =>  {
            res.status(400).send({
                message: 'Falha ao buscas produtos',
                data: e
            });
        });
}

exports.getBySlug = (req, res, next) => {
    Product
        .findOne({
            slug: req.params.slug,
            active: true
        }, 'title description slug price') //all
        .then(data => {
            res.status(200).send({data});
        }).catch(e =>  {
            res.status(400).send({
                message: 'Falha ao buscas produtos',
                data: e
            });
        });
}

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
                data: e
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