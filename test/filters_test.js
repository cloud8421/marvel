describe("Characters filters test", function() {

  beforeEach(function() {
    module('marvel.filters');
    var self = this;

    inject(function($filter) {
      self.urlForThumbnailFilter = $filter('urlForThumbnail');
    });
  });

  it("returns the thumbnail url for a given thumbnail object", function() {
    var thumbnail = {
      path: 'http://example.com/sample',
      extension: 'jpg'
    }
    expect(this.urlForThumbnailFilter(thumbnail)).toEqual('http://example.com/sample.jpg');
  });

});
