import { Angular2OsmPage } from './app.po';

describe('angular2-osm App', function() {
  let page: Angular2OsmPage;

  beforeEach(() => {
    page = new Angular2OsmPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-osm works!');
  });
});
