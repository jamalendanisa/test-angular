var app = angular.module('myApp');
  app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
    $rootScope.title = "AngularJS Test";
    $scope.show = true;
    $scope.showForm = false;
    $scope.login = function() {
      $scope.show = false;
      $scope.showForm = true;
    }
    $scope.formSubmit = function() {
      LoginService.users(function(users){
        $rootScope.isAuthenticated = users.some(function (value) {
            isAuth = $scope.username === value.username && $scope.password === value.username;
            console.log(users, isAuth, $scope );
            return isAuth;
        });
  
        if($rootScope.isAuthenticated) {
            $rootScope.userName = $scope.username;
            $scope.error = '';
            $scope.username = '';
            $scope.password = '';
            $state.transitionTo('home');
        } else {
            $scope.error = "Incorrect username/password !";
        }   
    });
  };    
});