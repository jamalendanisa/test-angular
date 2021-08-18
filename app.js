
(function() {
    var app = angular.module('myApp', ['ui.router']);
    app.run(function($rootScope, $location, $state, LoginService) {
        if(!$rootScope.isAuthenticated) {
            $state.transitionTo('login');
        }
    });
    app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('login', {
            url : '/login',
            templateUrl : '/Pages/Login/login.html',
            controller : 'LoginController',
        })
        .state('home', {
            url : '/home',
            templateUrl : '/Pages/Home/home.html',
            controller : 'HomeController'
        });
        $urlRouterProvider.otherwise('/login');
    }]);
})();