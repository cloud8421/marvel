var CharactersPage = require('./page-objects/characters-page');
var ComicsPage = require('./page-objects/comics-page');

describe('User views comics', function() {

  it('shows comics for a given character', function() {
    var charactersPage = new CharactersPage();
    var comicsPage = new ComicsPage();
    var comicsLink = charactersPage.firstCharacterComicsLink();
    comicsLink.click();
    expect(comicsPage.firstComic().isPresent()).toBe(true);
    expect(comicsPage.firstComicTitle()).toEqual('Avengers Academy (2010) #21');
  });

});
