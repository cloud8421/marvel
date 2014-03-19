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
      .when('/:characterId/comics', {
        templateUrl: 'partials/comics.html',
        controller: 'ComicsCtrl'
      })
      .otherwise({
        redirectTo: '/characters'
      });
  }]);
