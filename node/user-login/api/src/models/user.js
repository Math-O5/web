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