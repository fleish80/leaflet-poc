import {MapList} from './map-list.model';

describe('MapList', () => {

  let mapListData;
  let mapList: MapList;

  beforeEach(() => {
    mapListData = require('./map-list.json');
    mapList = new MapList(mapListData, ['id1', 'id2']);
  });

  it('should create an instance', () => {
    expect(mapList).toBeTruthy();
  });

  it('buildMapIdsList should be added to each map', () => {
    expect(mapList.mapItems).toEqual(require('./map-list-with-connected-to-list.json'));
  });

  it('should be in gateway group tree structure', () => {
    expect(mapList.gatewayGroupNodes).toEqual(require('./map-list-gateway-group.json'));
  });

  it('should be in hierarchy tree structure', () => {
    expect(mapList.hierarchyNodes).toEqual(require('./map-list-hierarchy.json'));
  });
});
