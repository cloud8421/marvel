(function() {
  'use strict';

  var marvelRepo = angular.module('marvel.repo', ['ngResource']);

  // Characters Factory
  marvelRepo.factory('Characters', ['$resource',
    function($resource) {

      var baseUrl = 'http://gateway.marvel.com/v1/public';

      return $resource(baseUrl, {}, {
        all: {
          url: baseUrl + '/characters',
          method: 'GET',
          params: {
            apikey: MarvelApiKey
          },
          cache: true,
          isArray: true,
          responseType: 'json',
          transformResponse: function(response) {
            return response.data.results;
          }
        },
        find: {
          url: baseUrl + '/characters/:id',
          method: 'GET',
          params: {
            apikey: MarvelApiKey
          },
          cache: true,
          responseType: 'json',
          transformResponse: function(response) {
            return response.data.results[0];
          }
        }
      });
    }]);
})();
