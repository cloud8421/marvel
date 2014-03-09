(function() {
  'use strict';

  var marvelRepo = angular.module('marvel.repo', ['ngResource']);

  // Characters Factory
  marvelRepo.factory('Characters', ['$resource',
    function($resource) {
      var url = 'http://gateway.marvel.com/v1/public/characters?apikey=' + MarvelApiKey;

      return $resource(url, {}, {
        all: {
          method: 'GET',
          isArray: true,
          responseType: 'json',
          transformResponse: function(response) {
            return response.data.results;
          }
        }
      });
    }]);
})();
