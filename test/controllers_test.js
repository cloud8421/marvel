describe("Characters controllers test", function() {

  var characters = {
    all: function() {
      return [
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
      ];
    },
    find: function() {
      return [
        {
          thumbnail: {
            path: 'foo',
            extension: 'bar'
          }
        }
      ];
    }
  };

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

  describe("Current character", function() {

    beforeEach(function() {
      spyOn(characters, 'find');
      this.scope.select(firstCharacter);
    });

    it("can select a character", function() {
      expect(this.scope.currentCharacter).toEqual(firstCharacter);
    });

    it("fetches the character detail", function() {
      expect(characters.find).toHaveBeenCalledWith({id: 101});
    });

    it("sets the current character detail", function() {
      expect(this.scope.currentCharacterDetail).toEqual(characters.find());
    });

  });

  describe("Paginating results", function() {

    beforeEach(function() {
      spyOn(characters, 'all');
    });

    it("paginates next", function() {
      this.scope.next();
      expect(characters.all).toHaveBeenCalledWith({offset: 20});
    });

    it("paginates prev", function() {
      this.scope.offset = 40;
      this.scope.prev();
      expect(characters.all).toHaveBeenCalledWith({offset: 20});
    });

    it("doesn't send negative offset", function() {
      this.scope.offset = 0;
      this.scope.prev();
      expect(characters.all).toHaveBeenCalledWith({offset: 0});
    });

  });

  describe("Search", function() {

    beforeEach(function() {
      spyOn(characters, 'all');
    });

    it("doesn't send the search term if empty", function() {
      this.scope.searchTerm = '';
      this.scope.search();
      expect(characters.all).toHaveBeenCalledWith({offset: 0});
    });

    it("searches for the given string", function() {
      this.scope.searchTerm = 'cap';
      this.scope.search();
      expect(characters.all).toHaveBeenCalledWith({
        offset: 0,
        nameStartsWith: 'cap'
      });
    });

    it("handles pagination with a search term", function() {
      this.scope.searchTerm = 'cap';
      this.scope.next();
      expect(characters.all).toHaveBeenCalledWith({
        offset: 20,
        nameStartsWith: 'cap'
      });
    });

  });

});
