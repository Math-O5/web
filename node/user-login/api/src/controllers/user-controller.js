'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = (req, res, next) => {
    User
        .find({active: true}, 'id username permissions') //all
        .then(data => {
            res.status(200).send({data});
        }).catch(e =>  {
            res.status(400).send({
                message: 'Falha ao buscar user',
                data: e
            });
        });
}

exports.getById = (req, res, next) => {
    User
        .findById(req.params.id) 
        .then(data => {
            res.status(200).send({data});
        }).catch(e =>  {
            res.status(400).send({
                message: 'Falha ao buscar user',
                data: e
            });
        });
}

exports.getByUsername = (req, res, next) => {
    User
        .findOne({
            username: req.params.username,
            active: true
        }, 'id username permissions') 
        .then(data => {
            res.status(200).send({data});
        }).catch(e =>  {
            res.status(400).send({
                message: 'Falha ao buscar user',
                data: e
            });
        });
}

exports.getBySPermissions = (req, res, next) => {
    User
        .find({
            permissions: req.params.permissions,
            active: true
        }, 'id username permissions') 
        .then(data => {
            res.status(200).send({data});
        }).catch(e =>  {
            res.status(400).send({
                message: 'Falha ao buscar user',
                data: e
            });
        });
}

exports.post = (req, res, next) => {
    let user = new User(req.body);

    user.save()
        .then(_ => {
            res.status(201).send({
                message: 'User cadastrado com sucesso!'
            });
        }).catch(e =>  {
            res.status(400).send({
                message: 'Falha ao cadastrar-se',
                data: e
            });
        });
};

// update user
// exports.put = (req, res, next) => {
//     User.findByIdAndUpdate(req.params.id, {
//         $set: {
//             title: req.body.title,
//             description: req.body.description,
//             price: req.body.price
//         }
//     }).then(x => {
//         res.status(200).send({
//             message: 'Atualizado.'
//         });
//     }).catch(e => {
//         res.status(400).send({
//             message: 'Falha ao atualizar.',
//             data: e
//         });
//     });
// };

exports.delete = (req, res, next) => {
    User.findOneAndRemove(req.params.id)
            .then(x => {
                res.status(200).send({
                    message: 'Atualizado.'
                });
            }).catch(e => {
                res.status(400).send({
                    message: 'Falha ao atualizar.',
                    data: e
                });
            });
            res.status(200).send(req.body);
};