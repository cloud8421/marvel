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

});
