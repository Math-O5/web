/**
 * autor: Mathias Fernandes
 * nusp: 10734352
 * email pessoal: mathfern4@gmail.com
 * emailUSP: mathfernandes@usp.br
 */

'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const service = new Schema({
    title: {
        type: String,
        required: [true, 'O título é obrigatório'],
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: [true, 'A descrição é obrigatória']
    },
    partner: {
        type:String,
        Required: [true, 'O nome do profissional que presta o serviço é obrigatório']
    },
    price: {
        type: Number,
        required: [true, 'O preço é obrigatório']
    },
    hours: [{
        type: String,
        required: true
    }]
});
 
module.exports = mongoose.model('Service', service);