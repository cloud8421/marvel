(function() {
  'use strict';

  function normalizeOffset(offset) {
    return offset < 0 ? 0 : offset;
  }

  function getCharacters(scope, Characters) {
    var params = {};
    params.offset = scope.offset;
    if (scope.searchTerm) {
      params.nameStartsWith = scope.searchTerm;
    }
    scope.characters = Characters.all(params);
  }

  var marvelControllers = angular.module('marvel.controllers', []);

  marvelControllers.controller('CharactersCtrl', ['$scope', 'Characters',
    function($scope, Characters) {
      $scope.offset = 0;
      $scope.searchTerm = null;
      $scope.currentCharacter = null;

      getCharacters($scope, Characters);

      $scope.select = function(character) {
        $scope.currentCharacter = character;
        // $scope.currentCharacterDetail = Characters.find({id: character.id});
      };

      $scope.next = function() {
        $scope.offset += 20;
        getCharacters($scope, Characters);
      }

      $scope.prev = function() {
        $scope.offset = normalizeOffset($scope.offset - 20);
        getCharacters($scope, Characters);
      }

      $scope.search = function() {
        $scope.offset = 0;
        getCharacters($scope, Characters);
      }

    }]);
})();
