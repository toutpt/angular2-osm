export class Angular2OsmPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-osm-app h1')).getText();
  }
}
