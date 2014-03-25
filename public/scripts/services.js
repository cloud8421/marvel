(function() {
  'use strict';

  var marvelRepo = angular.module('marvel.repo', ['ngResource']);

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

  marvelRepo.factory('Comics', ['$resource',
    function($resource) {

      var baseUrl = 'http://gateway.marvel.com/v1/public';

      return $resource(baseUrl, {}, {
        byCharacter: {
          url: baseUrl + '/characters/:id/comics',
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
        }
      });
   }]);

  marvelRepo.factory('WishListItems', ['$resource',
    function($resource) {

      return $resource('/', {}, {
        create: {
          url: 'wish_list_items',
          method: 'POST',
          responseType: 'json'
        },
        all: {
          url: 'wish_list_items',
          method: 'GET',
          isArray: true,
          responseType: 'json',
          transformResponse: function(response) {
            return response.comics;
          }
        }
      });
    }
  ]);

})();
