'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product.find({active: true}, 'id title slug price'); 
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Product
        .findOne({
            slug: slug,
            active: true
        }, 'title description slug price');
    return res;
}

exports.getById = async(id) => {
    const res = await Product
        .findById(req.params.id); 
    return res;
}

exports.getByTag = async(tag) => {
    const res = await Product
        .find({
            tags: tag,
            active: true
        }, 'title description slug price tags');
    return res;
} 

exports.create = async(data) => {
    let prod = new Product(data);
    await prod.save();
}

exports.update = async(id, data) => {
    const res = await Product.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price
        }
    });
    return res;
}

exports.delete = async(id) => {
    await Product.findOneAndRemove(id);
}