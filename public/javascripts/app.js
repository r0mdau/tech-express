angular.module('TechApp',['ngResource'])
    .controller('MainCtrl', ['$scope', 'Techs',function($scope, Techs){
        $scope.techs=Techs.query();
        $scope.addTech = function(){
		    var newTech = new Techs({name:$scope.newTechName});
		    newTech.$save();
		    $scope.techs.push(newTech);
		    $scope.newTechName='';
		}
    }])
    .factory('Techs', ['$resource', function($resource){
        return $resource('/techs/');
    }]);