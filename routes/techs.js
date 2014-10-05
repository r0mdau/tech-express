var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.json([{name:'JavaScript', votes:3}, {name:'Java', votes:2}]);
});

module.exports = router;