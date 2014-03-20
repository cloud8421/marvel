describe('User views comics', function() {

  it('shows comics for a given character', function() {
    browser.get('/');
    var firstCharacter = element(by.repeater('character in characters').row(0));
    var comicsLink = firstCharacter.element(by.binding('character.comics.available'));
    comicsLink.click();
    var firstComicTitle = element(by.repeater('comic in comics').row(0).column('title'));
    expect(firstComicTitle.getText()).toEqual('Avengers Academy (2010) #21');
  });

});
