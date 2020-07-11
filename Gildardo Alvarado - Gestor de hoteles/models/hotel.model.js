'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hotelSchema = Schema({
    name: String,
    password: String,
    score: Number,
    employees: [],
    dates: [Date],
    owner: String,
    role: String,
    pricerooms: Number
});

module.exports = mongoose.model('hotel', hotelSchema);