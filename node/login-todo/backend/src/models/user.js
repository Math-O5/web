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
const Schema = mongoose.Schema;

const schema = new Schema({
    username: {
        type: String, 
        required: true,
        trim: true
    }, 
    password: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true,
    },
    address: {
        type: String,
        required: false,
    },
    active: {
        type: Boolean, 
        required: true,
        default: true
    }, 
    permissions: [{
        type: String, 
        required: true,
    }], 
});

module.exports = mongoose.model('User', schema);