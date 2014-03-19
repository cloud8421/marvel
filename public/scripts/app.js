var marvelApp = angular.module('marvel', [
  'ngRoute',
  'marvel.controllers',
  'marvel.repo',
  'marvel.filters'
]);

marvelApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/characters', {
        templateUrl: 'partials/characters.html',
        controller: 'CharactersCtrl'
      })
      .otherwise({
        redirectTo: '/characters'
      });
  }]);
