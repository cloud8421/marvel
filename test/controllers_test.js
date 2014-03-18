describe("Characters controllers test", function() {
  var characters, firstCharacter, scope, controller;

  beforeEach(function() {
    module('marvel.controllers', 'marvel.fixtures');

    inject(function($rootScope, $controller, charactersJSON) {
      characters = {
        all: function() {
          return charactersJSON.data.results;
        },
        find: function() {
          return characterJSON.data.results[0];
        }
      };
      firstCharacter = charactersJSON;
      scope = $rootScope.$new();
      controller = $controller('CharactersCtrl', {
        $scope: scope,
        Characters: characters
      });
    });
  });

  it("has characters", function() {
    expect(scope.characters.length).toEqual(2);
  });

  describe("Current character", function() {

    beforeEach(function() {
      spyOn(characters, 'find');
      scope.select(firstCharacter);
    });

    it("can select a character", function() {
      expect(scope.currentCharacter).toEqual(firstCharacter);
    });

    // it("fetches the character detail", function() {
    //   expect(characters.find).toHaveBeenCalledWith({id: 101});
    // });

    it("sets the current character detail", function() {
      expect(scope.currentCharacterDetail).toEqual(characters.find());
    });

  });

  describe("Paginating results", function() {

    beforeEach(function() {
      spyOn(characters, 'all');
    });

    it("paginates next", function() {
      scope.next();
      expect(characters.all).toHaveBeenCalledWith({offset: 20});
    });

    it("paginates prev", function() {
      scope.offset = 40;
      scope.prev();
      expect(characters.all).toHaveBeenCalledWith({offset: 20});
    });

    it("doesn't send negative offset", function() {
      scope.offset = 0;
      scope.prev();
      expect(characters.all).toHaveBeenCalledWith({offset: 0});
    });

  });

  describe("Search", function() {

    beforeEach(function() {
      spyOn(characters, 'all');
    });

    it("doesn't send the search term if empty", function() {
      scope.searchTerm = '';
      scope.search();
      expect(characters.all).toHaveBeenCalledWith({offset: 0});
    });

    it("searches for the given string", function() {
      scope.searchTerm = 'cap';
      scope.search();
      expect(characters.all).toHaveBeenCalledWith({
        offset: 0,
        nameStartsWith: 'cap'
      });
    });

    it("handles pagination with a search term", function() {
      scope.searchTerm = 'cap';
      scope.next();
      expect(characters.all).toHaveBeenCalledWith({
        offset: 20,
        nameStartsWith: 'cap'
      });
    });

  });

});
