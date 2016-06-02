import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2OsmAppComponent } from '../app/angular2-osm.component';

beforeEachProviders(() => [Angular2OsmAppComponent]);

describe('App: Angular2Osm', () => {
  it('should create the app',
      inject([Angular2OsmAppComponent], (app: Angular2OsmAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-osm works!\'',
      inject([Angular2OsmAppComponent], (app: Angular2OsmAppComponent) => {
    expect(app.title).toEqual('angular2-osm works!');
  }));
});
