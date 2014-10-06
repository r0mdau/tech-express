angular.module('TechApp',[])
    .controller('MainCtrl', ['$scope',function($scope){
        $scope.techs= [{name:'express', votes: 4},{name:'mongoDB', votes:3}];
    }]);