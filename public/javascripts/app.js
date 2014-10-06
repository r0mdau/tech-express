angular.module('TechApp',['ngResource'])
    .controller('MainCtrl', ['$scope', 'Techs',function($scope, Techs){
        $scope.techs=Techs.query();
    }])
    .factory('Techs', ['$resource', function($resource){
        return $resource('/techs/');
    }]);