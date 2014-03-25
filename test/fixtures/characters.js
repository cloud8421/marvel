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
    })
    .value('comicsJSON', {
      data: {
        results: [
          {
            id: 101,
            title: 'Avengers: the initiative 101'
          },
          {
            id: 102,
            title: 'Avengers: the initiative 102'
          }
        ]
      }
    })
    .value('wishListItemsJSON', {
      comics: [
        {
          id: 29217,
          added_at: "2014-03-21 08:47:18 +0000"
        },
        {
          id: 29939,
          added_at: "2014-03-21 08:49:19 +0000"
        },
        {
          id: 36489,
          added_at: "2014-03-21 08:49:33 +0000"
        }
      ]
    });

})();
