/**
 * autor: Mathias Fernandes
 * nusp: 10734352
 * email pessoal: mathfern4@gmail.com
 * emailUSP: mathfernandes@usp.br
 */

'use strict'

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async() => {
    const res = await Order.find({}); 
    return res;
}

exports.create = async(data) => {
    let ord = new Order(data);
    await ord.save();
}
