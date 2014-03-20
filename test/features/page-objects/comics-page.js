module.exports = function() {
  this.get = function() {
    browser.get('/#/1009521/comics');
  };
  this.firstComic = function() {
    return element(by.repeater('comic in comics').row(0));
  }
  this.firstComicTitle = function() {
    return this.firstComic().element(by.binding('title')).getText();
  }
}
