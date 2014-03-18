(function() {
  'use strict';

  angular.module('marvel.fixtures', [])
    .value('charactersJSON', {
      data: {
        results: [
          {
            id: 101,
            thumbnail: {
              path: 'foo',
              extension: 'bar'
            }
          },
          {
            id: 102,
            thumbnail: {
              path: 'baz',
              extension: 'gah'
            }
          }
        ]
      }
    })
    .value('characterJSON', {
      data: {
        results: [
          {
            id: 101,
            thumbnail: {
              path: 'foo',
              extension: 'bar'
            }
          }
        ]
      }
    });

})();
