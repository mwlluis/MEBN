var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ItemSchema = new Schema({

module.exports = mongoose.model('Item', ItemSchema);