(function() {
  'use strict';

  function normalizeOffset(offset) {
    return offset < 0 ? 0 : offset;
  }

  var marvelControllers = angular.module('marvel.controllers', []);

  // Characters Controller
  marvelControllers.controller('CharactersCtrl', ['$scope', 'Characters',
    function($scope, Characters) {
      $scope.offset = 0;
      $scope.searchTerm = null;
      $scope.currentCharacter = null;

      function getCharacters() {
        var params = {};
        params.offset = $scope.offset;
        if ($scope.searchTerm) {
          params.nameStartsWith = $scope.searchTerm;
        }
        $scope.characters = Characters.all(params);
      }

      getCharacters();

      $scope.select = function(character) {
        $scope.currentCharacter = character;
      };

      $scope.next = function() {
        $scope.offset += 20;
        getCharacters();
      }

      $scope.prev = function() {
        $scope.offset = normalizeOffset($scope.offset - 20);
        getCharacters();
      }

      $scope.search = function() {
        $scope.offset = 0;
        getCharacters();
      }

      $scope.thumbnailFor = function(character) {
        return character.thumbnail.path + '.' + character.thumbnail.extension;
      }
    }]);
})();
