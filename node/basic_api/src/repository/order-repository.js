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
