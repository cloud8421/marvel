(function() {
  'use strict';

  angular.module('marvel.filters', [])
    .filter('urlForThumbnail', function() {
      return function(thumbnail) {
        return thumbnail.path + '.' + thumbnail.extension;
      }
    })
    .filter('length', function() {
      return function(collection) {
        return collection.length;
      }
    });

})();
