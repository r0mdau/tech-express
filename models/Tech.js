var mongoose = require('mongoose');
var TechSchema = new mongoose.Schema({
    name: String,
    votes: {type:Number, default:0}
});

mongoose.model('Tech', TechSchema);