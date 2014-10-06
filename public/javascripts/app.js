angular.module('TechApp',[])
    .controller('MainCtrl', ['$scope',function($scope){
        $scope.test = 'Hello from Angular';
    }]);