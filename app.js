var myapp = angular.module('green',['ngRoute','ngMap','ngAnimate', 'ngTouch', 'ngSanitize', 'ui.bootstrap']);

//routs
myapp.config(function($routeProvider){
    
    $routeProvider
    .when('/', {
        templateUrl: 'pages/Home.html'
    })
    .when('/services', {
        templateUrl: 'pages/Services.html'
    })
    .when('/team', {
        templateUrl: 'pages/Team.html'
    })
    .when('/pricing', {
        templateUrl: 'pages/Pricing.html'
    })
    .when('/contact', {
        templateUrl: 'pages/Contact.html'
    })
    .when('/equipements', {
        templateUrl: 'pages/Equipements.html'
    })
    .when('/mc', {
        templateUrl: 'pages/MC.html'
    })
    .when('/qpix', {
        templateUrl: 'pages/QPix.html'
    })
    .when('/i3x', {
        templateUrl: 'pages/i3x.html'
    })
    .when('/biolector', {
        templateUrl: 'pages/Biolector.html'
    })
    .when('/bioflo', {
        templateUrl: 'pages/Bioflo.html'
    })
    .when('/ltq', {
        templateUrl: 'pages/LTQ.html'
    })
    .when('/service1', {
        templateUrl: 'pages/Service1.html'
    })
    .when('/service2', {
        templateUrl: 'pages/Service2.html'
    })
    .when('/service3', {
        templateUrl: 'pages/Service3.html'
    })
    .when('/service4', {
        templateUrl: 'pages/Service4.html'
    });
    
    
});

myapp.directive("mycarousel1", function(){
    return{
        templateUrl: "pages/Carousel1.html"
    };
});
myapp.directive("mycarousel2", function(){
    return{
        templateUrl: "pages/Carousel2.html"
    };
});
myapp.directive("normalHeader", function(){
    return{
        templateUrl: "pages/NormalHeader.html"
    };
});


myapp.controller("carouselCtrl1", ["$scope", function($scope){
    $scope.slide = function (dir) {
    $('#myCarousel1').carousel(dir);
};
}]);
myapp.controller("carouselCtrl2", ["$scope", function($scope){
    $scope.slide = function (dir) {
    $('#myCarousel2').carousel(dir);
};
}]);