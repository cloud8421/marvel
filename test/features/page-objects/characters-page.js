module.exports = function() {
  this.get = function() {
    browser.get('/#/characters');
  };
  this.firstCharacter = function() {
    return element(by.repeater('character in characters').row(0));
  }
  this.firstCharacterName = function() {
    return this.firstCharacter().element(by.binding('name')).getText();
  };
  this.firstCharacterComicsLink = function() {
    return this.firstCharacter().element(by.binding('comics.available'));
  }
}
