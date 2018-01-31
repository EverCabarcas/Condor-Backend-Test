var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema_specialties = new Schema({
    name: {type: String, required: true},
    createdBy: {type: Number, required: true},
    createdAt: {type: Date, required: true},
    updatedBy: {type: Number, required: true},
    updatedAt: {type: Date, required: true}
});

module.exports = mongoose.model('specialtie', schema_specialties);