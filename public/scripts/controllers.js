(function() {
  'use strict';

  var marvelControllers = angular.module('marvel.controllers', []);

  // Characters Controller
  marvelControllers.controller('CharactersCtrl', ['$scope', 'Characters',
    function($scope, Characters) {
      $scope.currentCharacter = null;
      $scope.characters = Characters.all();

      $scope.select = function(character) {
        $scope.currentCharacter = character;
      };

      $scope.thumbnailFor = function(character) {
        return character.thumbnail.path + '.' + character.thumbnail.extension;
      }
    }]);
})();
