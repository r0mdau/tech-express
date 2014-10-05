var express = require('express');
var router = express.Router();

var techs = [{name:'JavaScript', votes:3}, {name:'Java', votes:2}];

router.get('/', function(req, res, next){
    res.json(techs);
});

router.post('/', function(req, res, next){
    techs.push(req.body);
    res.status(201).json(req.body);
});

module.exports = router;