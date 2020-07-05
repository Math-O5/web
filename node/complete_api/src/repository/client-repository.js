'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Client');

exports.get = async() => {
    const res = await Client.find({}); 
    return res;
}

exports.create = async(data) => {
    let cli = new Client(data);
    await cli.save();
}

/**
 * @data email of client
*/ 
exports.authenticate = async(data) => {
    const res = await Client.findOne(
        { 
            email: data.email,
            password: data.password
        }); 
    return res;
}
