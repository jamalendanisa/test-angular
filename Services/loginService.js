var app = angular.module('myApp');
  app.factory('LoginService', function($http) {
  return {
    users : function(callback) {
      $http.get('https://jsonplaceholder.typicode.com/users').then(function successCallback(response) {
        callback(response.data);
      });
   }
 };
});