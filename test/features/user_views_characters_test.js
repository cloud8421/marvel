describe('User views characters', function() {

  it('shows the characters list', function() {
    browser.get('/');
    var firstCharacterName = element(by.repeater('character in characters').row(0).column('name'));
    expect(firstCharacterName.getText()).toEqual('Hank Pym');
  });

});
