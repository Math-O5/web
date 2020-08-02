/**
 * autor: Mathias Fernandes
 * nusp: 10734352
 * email pessoal: mathfern4@gmail.com
 * emailUSP: mathfernandes@usp.br
 */

'use strict'

const jwt = require('jsonwebtoken');

/** 
    @argument data email of user
    @return the token value which expires in 1 day
*/ 
exports.generateToken = async(data) => {
    return jwt.sign(data, global.SALT_KEY, {expiresIn: '1d'});
}

/**
 * @argument token generate by generateToken()
 * @retrun data
 */
exports.decodeToken = async(token) => {
    let data = await jwt.verify(token, global.SALT_KEY);
    return data;
}

/**
*   @return 
*/ 
exports.authorize = function(req, res, next) {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    } else {
        jwt.verify(token, global.SALT_KEY, function(error, decoded) { 
            if(error) {
                res.status(401).json({
                    message: 'Token inválido'
                });
            } else {
                next();
            }
        });
    }
}