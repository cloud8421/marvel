describe("Sample test", function() {

  var characters = {
    all: function() {
      return [
        {
          thumbnail: {
            path: 'foo',
            extension: 'bar'
          }
        },
        {
          thumbnail: {
            path: 'baz',
            extension: 'gah'
          }
        }
      ]
    }
  }

  var firstCharacter = characters.all()[0];

  beforeEach(function() {
    module('marvel.controllers');
    var self = this;

    inject(function($rootScope, $controller) {
      self.scope = $rootScope.$new();
      self.ctrl = $controller('CharactersCtrl', {
        $scope: self.scope,
        Characters: characters
      });
    });
  });

  it("has characters", function() {
    expect(this.scope.characters.length).toEqual(2);
  });

  it("can select a character", function() {
    this.scope.select(firstCharacter);
    expect(this.scope.currentCharacter).toEqual(firstCharacter);
  });

  it("generates a thumbnail", function() {
    expectedThumbnail = 'foo.bar';
    expect(this.scope.thumbnailFor(firstCharacter)).toEqual(expectedThumbnail);
  });

});
