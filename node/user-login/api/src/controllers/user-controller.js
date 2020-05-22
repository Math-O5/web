'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');

/**
 * @obj debug functions
 */
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

/**
 * @route POST http://localhost:3001/users/newUser/register
 * @obj Register user
 * @acess public
 */
exports.register = (req, res, next) => {
    let { 
        username, 
        email, 
        password,
        confirm_password,
        permissions,
    } = req.body;

    if(password !== confirm_password)
        return res.status(400).json({
            message: 'Senhas diferentes'
        });

    if(password.length < 6) {
        return res.status(400).json({
            message: 'Senha fraca.'
        })
    }

    User.
        findOne({username: username}).then(user => {
            if(user) {
                return res.status(400).json({
                    message: 'Username já foi escolhido.'
                });
            }
        });

    User.
        findOne({email: email}).then(user => {
            if(user) {
                return res.status(400).json({
                    message: 'Email já foi registrado.'
                });
            }
        });

    
    let newUser = new User({username, email, password, permissions});

    // hash passport
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
                if(err)
                    throw err;
                newUser.password = hash;
                newUser.save()
                    .then(_ => {
                        res.status(201).send({
                            message: 'User cadastrado com sucesso!'
                        });
                    }).catch(e =>  {
                        return res.status(400).send({
                            message: 'Falha ao cadastrar-se',
                            data: e
                        });
                    });
            });
        });

};

/**
 * @route POST http://localhost:3001/users/login
 */
exports.login = (req, res, next) => {
    User
        .findOne({ username: req.body.username }) // search user by username
        .then(user => {
            if(!user) {
                return res.status(400).json({
                    message: 'Usuário não encontradoa.',
                    sucess: false,
                    data: req.body,
                });
            }

            bcrypt.compare(req.body.password, user.password) // compare passwords
                  .then(isMatch => {
                      if(isMatch) {
                        // return token
                        let data = {
                            username: user.username,
                            email: user.email,
                        }
                         res.status(200).send({
                            data: data,
                            sucess: true,
                            message: 'acesso liberado',
                        });
                      } else {
                        res.status(400).send({
                            message: 'Senha ou Usuários incorretos.',
                            sucess: false,
                        });
                      }
                  });
        }).catch(e =>  {
            res.status(400).send({
                message: 'Usuário não encontrado.',
                sucess: false,
                data: e
            });
        });
}

// /**
//  * @route GET 
//  * @return user data
//  * @acess private
//  */
// exports.getProfile = (req, res, next) => {