var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tech = mongoose.model('Tech');

var techs = [{id: 1, name:'JavaScript', votes:3}, {id: 2,name:'Java', votes:2}];

router.get('/', function(req, res, next){
    Tech.find(function(err, techs){
        if(err){return next(err);}
        res.json(techs);
    });
});

router.post('/', function(req, res, next){
    var newTech = new Tech(req.body);
    newTech.save(function(err, tech){
        if(err){return next(err);}
        res.status(201).json(tech);
    });
});

router.param('techId', function(req, res, next, techId){
    var query = Tech.findById(techId);

    query.exec(function(err, tech){
        if(err){return next(err);}
        if(!tech){res.status(404).json('no tech for this id');}
        req.tech = tech;
        return next();
    });
});

router.post('/:techId/vote', function(req, res, next){
    if(req.tech){
        req.tech.vote(function(err, tech){
            if(err){return next(err);}
            res.status(201).json(tech);
        }); 
    }

});

router.post('/:techId/unvote', function(req, res, next){
    if(req.tech){
        req.tech.unvote(function(err, tech){
            if(err){return next(err);}
            res.status(201).json(tech);
        }); 
    }

});

router.post('/:techId/del', function(req, res, next){
    if(req.tech){
        req.tech.remove(function(err, tech){
            if(err){return next(err);}
            res.status(201).json(tech);
        });
    }
});

module.exports = router;