/**
 * autor: Mathias Fernandes
 * nusp: 10734352
 * email pessoal: mathfern4@gmail.com
 * emailUSP: mathfernandes@usp.br
 */

'use strict'

const repo = require('../repository/product-reposiry');
const authService = require('../services/auth-service');

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

exports.post = async(req, res, next) => {
    try {
        let data = await repo.create(req.body)
        res.status(201).send({
            message: 'Usuario cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao cadastrar user',
        });
    }
};

/** 
 *  @params email of client
 *  @params password of user
 *  TODO encrpyt the password before pass to repository
 * */ 
exports.authenticate = async(req, res, next) => {
    try {
        // find the client by email and password
        const cli = await repo.authenticate({
            email: req.body.email,
            password: req.body.password
        });

        /**
         * if no client was found then error
         */
        if(!cli) {
            res.status(404).send({
                message: 'Falha ao cadastrar user',
            });
            return;
        }

        const token = await authService.generateToken({
            id: cli._id,
            email: cli.email,
            name: cli.name
        });

        res.status(201).send({
            token: token,
            data: {
                name: cli.name,
                email: cli.email,
            },
            message: 'Usuario cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao cadastrar user',
        });
    }
};


