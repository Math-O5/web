/**
 * autor: Mathias Fernandes
 * nusp: 10734352
 * email pessoal: mathfern4@gmail.com
 * emailUSP: mathfernandes@usp.br
 */

'use strict'

const mongoose = require('mongoose');
const Service = mongoose.model('Service');
const repositsitory = require('../repository/service-repository');
const ValidationContract = require('../validators/validators');

/**
 * @function getByPartnerHours
 * @param { JSON } req : no used
 * @param { JSON } res : send stats 200 ok or 500 fail. 
 * @return { JSON[] } res.data : All services 
 */
exports.get = async(req, res, next) => {
    try {
        const data = await repositsitory.get();
        res.status(200).send(JSON.stringify({data}));
    } catch (e) {
        res.status(500).send(JSON.stringify({
            message: 'Falha ao busca serviços',
        }));
    }
}

exports.getById = async(req, res, next) => {
    try {
        let data = await repositsitory.getById(req.params.id);
        res.status(200).send(JSON.stringify({data}));
    } catch (e) {
        res.status(500).send(JSON.stringify({
            message: 'Falha ao buscar serviço',
        }));
    }       
}

/**
 * @function getBySlug
 * @param { JSON } req : requisição pelo url
 * @param { JSON } res : registros encontrados
 */
exports.getBySlug = async(req, res, next) => {
    try {
        let data = await repositsitory.getBySlug(req.params.slug)
        res.status(200).send({data});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscas serviços',
        });
    }
}

/**
 * @function getByPartnerHours
 * @param { JSON } req : requisição no body em forma {"name": "braga", "hours": [11, 16]}
 * @param { JSON } res : registros encontrados
 */
exports.getByPartnerHours = async(req, res, next) => {
    try {
        let data = await repositsitory.getByPartnerHours(req.body);
        res.status(200).send({data});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscas serviços',
        });
    }
}

/**
 * @function post
 * @param { JSON } req : requisição no body em forma { title: "Tosa radical", slug: "tosa-radical", description: "Tosa bem curta", partner: "Luis Braga", price: 120.45, hours: [10, 11, 14, 15, 16]
 * @param { JSON } res : registros encontrados
 */
exports.post = async(req, res, next) => {

    const service = {
        title: req.body.title,
        slug: req.body.slug,
        description: req.body.description,
        partner: req.body.partner,
        price: req.body.price,
        hours: req.body.hours,
    } 

    let contract = new ValidationContract();

    contract.hasMinLen(service.title, 3, 'O nome do serviço tem que ter mais que 3 caracteres.');

    // If one fail, return error 400 and message
    if(!contract.isValid()) {
        return res.status(400).json({
            message: contract.firstError().message,
        })
    }

    try {
        let data = await repositsitory.create(service);
        res.status(201).send({
            message: 'Service cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao cadastrar serviço',
        });
    }
};

exports.put = async(req, res, next) => {
    try {
        let data = await repositsitory.update(req.params.id, req.params.body)
        res.status(200).send({data});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao cadastrar serviço',
        });
    }
};

exports.delete = async(req, res, next) => {
    try {
        let data = await repositsitory.delete(req.params.id) 
        res.status(200).send({data});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao deletar.',
        });
    }
};