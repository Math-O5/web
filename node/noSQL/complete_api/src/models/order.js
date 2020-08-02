/**
 * autor: Mathias Fernandes
 * nusp: 10734352
 * email pessoal: mathfern4@gmail.com
 * emailUSP: mathfernandes@usp.br
 */

'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const order = new Schema({
    number: {
        type: String,
        required: true
        },
        createDate: {
            type: Date,
            required: true,
            default: Date.now()
        },
        status: {
            type: String,
            required: true,
            enum: ['created', 'done'],
            default: 'created'
        },
        client: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Client'
        },
        items: [{
            quantity: {
                type: Number,
                required: true,
                default: 1
            },
            product: {
                type: mongoose.Schema.Types.ObjectId , 
                 ref: 'Product',
            }
        }],  
});

module.exports = mongoose.model('Order', order);