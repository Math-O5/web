/**
 * autor: Mathias Fernandes
 * nusp: 10734352
 * email pessoal: mathfern4@gmail.com
 * emailUSP: mathfernandes@usp.br
 */

'use strict'

const mongoose = require('mongoose');
const Service = mongoose.model('Service');

exports.get = async() => {
    const res = await Service.find(); 
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Service
        .findOne({
            slug: slug,
        });
    return res;
}

exports.getByPartnerHours = async(body) => {
    const res = await Service
        .find({ 
            partner : { $regex: body.name, $options: 'i' },
            hours : {
                $in:  body.hours        
            }
    });
    return res;
}

exports.getById = async(id) => {
    const res = await Service
        .findById(id); 
    return res;
}

exports.getByTag = async(tag) => {
    const res = await Service
        .find({
            tags: tag,
            active: true
        }, 'title description slug price tags');
    return res;
} 

exports.create = async(data) => {
    let prod = new Service(data);
    await prod.save();
}

exports.update = async(id, data) => {
    const res = await Service.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price
        }
    });
    return res;
}

exports.delete = async(id) => {
    await Service.findOneAndRemove(id);
}