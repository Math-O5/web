'use strict'
const repo = require('../repository/order-reposiry');
const guid = require('guid');

exports.get = async(req, res, next) => {
    try {
        let data = await repo.get()
        res.status(200).send({data});
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao buscar',
        });
    }
}

/**
 *  @params token
 *  @params items
 * */ 
exports.post = async(req, res, next) => {    
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data =  await authService.decodeToken(token);

        
        let data = await repo.create({
            client: data.id,
            number:  guid.raw().substring(0, 6),
            items: req.body.items
        })
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao cadastrar pedido',
        });
    }
};
