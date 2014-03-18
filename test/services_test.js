describe("Services test", function() {

  describe("Characters Service", function() {
    var httpBackend, service, response;

    beforeEach(function() {
      window.MarvelApiKey = 'xxx';
      module('marvel.repo', 'marvel.fixtures');

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

});
