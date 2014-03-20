var CharactersPage = require('./page-objects/characters-page');

describe('User views characters', function() {

  it('shows the characters list', function() {
    var charactersPage = new CharactersPage();
    charactersPage.get();
    expect(charactersPage.firstCharacter().isPresent()).toBe(true);
    expect(charactersPage.firstCharacterName()).toEqual('Hank Pym');
  });

});
