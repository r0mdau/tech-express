angular.module('TechApp',['ngResource'])
    .controller('MainCtrl', ['$scope', 'Techs',function($scope, Techs){
        $scope.techs=Techs.query();
        $scope.addTech = function(){
            var newTech = new Techs({name:$scope.newTechName});
            newTech.$save();
            $scope.techs.push(newTech);
            $scope.newTechName='';
            console.log(newTech);
        };
        
        $scope.delTech = function(tech){
            tech.$del();
            $scope.techs.pop(tech);
            $scope.newTechName='';
            console.log('delete ' + tech);
        };
        
        $scope.voteFor = function(tech){
            var foo = tech.$voteFor().then(function(){
                $scope.techs = Techs.query();
            });
        };
        
        $scope.unvoteFor = function(tech){
            var foo = tech.$unvoteFor().then(function(){
                $scope.techs = Techs.query();
            });
        };
        
        $scope.del = function(tech){
            var foo = tech.$del().then(function(){
                $scope.techs = Techs.query();
            });
        };
    }])
    .factory('Techs', ['$resource', function($resource){
        return $resource('/techs/:techId',{techId:'@_id'},{
            'voteFor':{method:'POST', url:'/techs/:techId/vote'},
            'unvoteFor':{method:'POST', url:'/techs/:techId/unvote'},
            'del':{method:'POST', url:'/techs/:techId/del'}
        });
    }]);