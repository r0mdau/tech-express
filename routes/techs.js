var express = require('express');
var router = express.Router();

var techs = [{id: 1, name:'JavaScript', votes:3}, {id: 2,name:'Java', votes:2}];

router.get('/', function(req, res, next){
    res.json(techs);
});

router.post('/', function(req, res, next){
    techs.push(req.body);
    res.status(201).json(req.body);
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