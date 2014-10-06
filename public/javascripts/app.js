angular.module('TechApp',['ngResource'])
    .controller('MainCtrl', ['$scope', 'Techs',function($scope, Techs){
        $scope.techs=Techs.query();
        $scope.addTech = function(){
		    var newTech = new Techs({name:$scope.newTechName});
		    newTech.$save();
		    $scope.techs.push(newTech);
		    $scope.newTechName='';
		};
		$scope.voteFor=function(tech){
            var foo = tech.$voteFor().then(function(){
                $scope.techs=Techs.query()
            });
        };
    }])
    .factory('Techs', ['$resource', function($resource){
        return $resource('/techs/:techId',{techId:'@_id'},{
            'voteFor':{method:'POST', url:'/techs/:techId/vote'}
        });
    }]);