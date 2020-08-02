/**
 * autor: Mathias Fernandes
 * nusp: 10734352
 * email pessoal: mathfern4@gmail.com
 * emailUSP: mathfernandes@usp.br
 */

'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const repo = require('../repository/product-reposiry');

exports.get = async(req, res, next) => {
    try {
        let data = await repo.get()
        res.status(200).send({data});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao busca produtos',
        });
    }
}

exports.getById = async(req, res, next) => {
    try {
        let data = await repo.getById(req.params.id) 
        res.status(200).send({data});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar produto',
        });
    }       
}

exports.getBySlug = async(req, res, next) => {
    try {
        let data = await repo.getBySlug(req.params.slug)
        res.status(200).send({data});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscas produtos',
        });
    }
}

exports.getBySTag = async(req, res, next) => {
    try {
        let data = await repo.getBySTag()
        res.status(200).send({data});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscas produtos',
        });
    }
}

exports.post = async(req, res, next) => {
    try {
        let data = await repo.create(req.body)
        res.status(201).send({
            message: 'Product cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao cadastrar produto',
        });
    }
};

exports.put = async(req, res, next) => {
    try {
        let data = await repo.update(req.params.id, req.params.body)
        res.status(200).send({data});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao cadastrar produto',
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        let data = await repo.delete(req.params.id) 
        res.status(200).send({data});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao atualizar.',
        });
    }
};