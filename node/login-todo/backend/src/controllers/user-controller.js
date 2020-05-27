/*
    Desenvolvido por:
    Nome: Mathias Fernandes
    USP:  10734352
    email: mathfernandes@usp.br
    email2: mathfern4@gmail.com

    Explicação das pastas em  README.md
*/ 
'use strict'

const mongoose = require('mongoose');
const authService = require('../services/auth-service');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const ValidationContract = require('../validators/validators');
mongoose.set('useFindAndModify', false);

/**
 * @route GET http://localhost:3001/users/perfil/:username
 * @obj Get info user
 * @acess private
 */
exports.getByUsername = (req, res, next) => {
    User
        .findOne({
            username: req.params.username,
            active: true
        }, 'id username email address') 
        .then(data => {
            return res.status(200).json({
                data: data
            });
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
        address,
        permissions,
    } = req.body;

    let contract = new ValidationContract();

    contract.isEmail(email, 'O email não é válido');
    contract.hasMaxLen(username, 9, 'O username ultrapassou o limite de 9 caractes.');
    contract.hasMinLen(username, 5, 'O username não tem menos de 5 caracteres.');
    contract.isLowerCase(username, 'O username não pode conter letras maiusculas.');
    contract.hasMinLen(address, 10, 'O endereço não contém informações suficientes.');
    contract.hasMinLen(password, 9, 'Senha muito curta');
    contract.hasSpace(password, 'Espaço não é permitida na senha.');
    contract.isEqual(password, confirm_password, 'Senhas diferentes.');

    // If one fail, return error 400 and message
    if(!contract.isValid()) {
        return res.status(400).json({
            message: contract.firstError().message,
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

    
    let newUser = new User({username, password, email, address, permissions});

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
        .findOne({ email: req.body.email }) // search user by username
        .then(user => {
            if(!user) {
                return res.status(400).json({
                    message: 'Usuário não encontrado.',
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

/**
 * @route DELETE http://localhost:3001/users/delete/:id
 * @obj Delete user
 * @acess private
 */
exports.delete = (req, res, next) => {
    User
        .findOneAndDelete(req.params.id)
        .then(x => {
            res.status(200).send({
                message: 'Deletado.'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao deletar.',
                data: e
            });
        });
};

/** 
 *  @params email of user
 *  @params password of user
 *  @return info user and token to keep login 
 * */ 
exports.authenticate = async(req, res, next) => {
    try {
        const user = await User.findOne({ 
            email: req.body.email,
        }); 
        // find the client by email and password
        
        /**
         * if no client was found then error
         */
        if(!user) {
            res.status(404).send({
                message: 'Email inválido',
            });
            return;
        }
    
        const token = await authService.generateToken({
            id: user._id,
            email: user.email,
            name: user.username
        });
        
        bcrypt.compare(req.body.password, user.password) // compare passwords
        .then(isMatch => {
            if(isMatch) {
                res.status(201).send({
                        token: token,
                        data: {
                            id: user._id,
                            username: user.username,
                            email: user.email,
                            address: user.address,
                            sucess: true,

                        },
                        message: 'Acesso liberado!'
                    });
                } else {
                    res.status(400).send({
                        message: 'Senha ou Usuários incorretos.',
                        sucess: false,
                    });
                }
            }).catch(err => {
                res.status(400).send({
                    message: 'Senha ou Usuários incorretos.',
                    sucess: false,
                    data: user,
                });
            });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao autenticar user',
        });
    }
};