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
      $scope.currentCharacter = null;
      $scope.characters = Characters.all({offset: $scope.offset});

      $scope.select = function(character) {
        $scope.currentCharacter = character;
      };

      $scope.next = function() {
        $scope.offset += 20;
        $scope.characters = Characters.all({offset: $scope.offset});
      }

      $scope.prev = function() {
        $scope.offset = normalizeOffset($scope.offset - 20);
        $scope.characters = Characters.all({offset: $scope.offset});
      }

      $scope.thumbnailFor = function(character) {
        return character.thumbnail.path + '.' + character.thumbnail.extension;
      }
    }]);
})();
