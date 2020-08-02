/**
 * autor: Mathias Fernandes
 * nusp: 10734352
 * email pessoal: mathfern4@gmail.com
 * emailUSP: mathfernandes@usp.br
 */

'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    username: {
        type: String, 
        required: true,
        trim: true
    },
    email: {
        type: String, 
        required: true,
        trim: true
    },
    password: {
        type: String, 
        required: true,
    }, 
    role: {
        type: String,
        required: true
    } 
});

module.exports = mongoose.model('User', user);