var myapp = angular.module('app', ['ui.bootstrap']);
myapp.controller("CarouselDemoCtrl",["$scope", function($scope){
    $scope.myInterval = 3000;
    $scope.slides = [
    {
      image: 'my/1.jpg'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
    ];
}]);
