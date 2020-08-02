'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
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
    filepath: {
        type:String,
        Required: [true, 'A imagem é obrigatória']
    },
    price: {
        type: Number,
        required: [true, 'O preço é obrigatório']
    },
    quantityStore: {
        type: Number,
        required: [true, 'Informe a quantidade disponível']
    },
    quantitySold: {
        type: Number,
        required: [true, 'Informe a quantidade disponível']
    },
    type: [{
        type: String,
        required: true
    }]
});
 
module.exports = mongoose.model('Product', product);