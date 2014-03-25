describe("Services test", function() {
  var httpBackend, service, response;
  window.MarvelApiKey = 'xxx';

  beforeEach(function() {
    module('marvel.repo', 'marvel.fixtures');
  });

  describe("Characters Service", function() {
    beforeEach(function() {
      inject(function($httpBackend, Characters) {
        httpBackend = $httpBackend;
        service = Characters;
      });
    });

    it("gets all characters", function() {
      inject(function(charactersJSON) {
        response = charactersJSON;
      });
      httpBackend.whenGET(/characters/).respond(response);

      var characters = service.all();
      httpBackend.flush();
      expect(characters.length).toEqual(2);
    });

    it("finds a single character", function() {
      inject(function(characterJSON) {
        response = characterJSON;
      });
      httpBackend.whenGET(/101/).respond(response);

      var character = service.find({id: '101'});
      httpBackend.flush();
      expect(character.id).toEqual(101);
    });
  });

  describe("Comics Service", function() {
    beforeEach(function() {
      inject(function($httpBackend, Comics) {
        httpBackend = $httpBackend;
        service = Comics;
      });
    });

    it("gets all comics for a given character", function() {
      inject(function(comicsJSON) {
        response = comicsJSON;
      });
      httpBackend.whenGET(/\/101\/comics/).respond(response);

      var comics = service.byCharacter({id: 101});
      httpBackend.flush();
      expect(comics.length).toEqual(2);
    });

  });

  describe("WishListItemsSyncApi Service", function() {
    beforeEach(function() {
      inject(function($httpBackend, WishListItemsSyncApi) {
        httpBackend = $httpBackend;
        service = WishListItemsSyncApi;
      });
    });

    it("gets the wish list items", function() {
      inject(function(wishListItemsJSON) {
        response = wishListItemsJSON;
      });
      httpBackend.whenGET(/wish_list_items/).respond(response);

      var wishListItems = service.all();
      httpBackend.flush();
      expect(wishListItems.length).toEqual(3);
    });
  });

  describe("WishListItems Service", function() {
    var WishListItemsSyncApiMock = {
      create: function(comic) {
        return { comics: [ comic ] }
      },
      all: function() {
        return [];
      }
    };
    beforeEach(function() {
      module('marvel.repo', function($provide) {
        spyOn(WishListItemsSyncApiMock, 'create');
        $provide.value('WishListItemsSyncApi', WishListItemsSyncApiMock);
      });
      inject(function(WishListItems) {
        service = WishListItems;
      });
    });

    describe("adding comics to the wish list", function() {
      var comic = { id: 9999 };

      beforeEach(function() {
        service.add(comic);
      });

      it("adds the comic to the local list", function() {
        expect(service.all().length).toEqual(1);
        expect(service.all()[0]).toEqual(comic);
      });

      it("creates on the sync service", function() {
        expect(WishListItemsSyncApiMock.create).toHaveBeenCalled();
      });

    });

  });

});
