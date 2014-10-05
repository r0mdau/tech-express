var mongoose = require('mongoose');
var TechSchema = new mongoose.Schema({
    name: String,
    votes: {type:Number, default:0}
});

TechSchema.methods.vote = function(cb){
    this.votes +=1;
    this.save(cb);
};

mongoose.model('Tech', TechSchema);