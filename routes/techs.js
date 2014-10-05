var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Tech = mongoose.model('Tech');

router.get('/', function(req, res, next){
    Tech.find(function(err, techs){
        if(err){return next(err);}
        res.json(techs);
    })
});

router.post('/', function(req, res, next){
    var newTech = new Tech(req.body);
    newTech.save(function(err, tech){
        if(err){return next(err);}
        res.status(201).json(tech);
    })
});

router.param('techId', function(req, res, next, techId){
    console.log('param '+ techId);
    var tech = null;
    for (var i = techs.length - 1; i >= 0; i--) {
        if(techs[i].id == techId){
            req.tech = techs[i];
            break;
        };
    };
    return next();
});

router.post('/:techId/vote', function(req, res, next){
    if(req.tech === null){
        console.log('not found');
        res.status(404).json({message:'not found'});
    }
    req.tech.votes = req.tech.votes +1;
    res.json(req.tech);
});

module.exports = router;