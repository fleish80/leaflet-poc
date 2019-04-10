import {AssignMap} from './assign-map.model';

describe('MapList', () => {

  let assignMapData;
  let assignMap: AssignMap;

  beforeEach(() => {
    assignMapData = require('./assign-map.json');
    assignMap = new AssignMap(assignMapData, 5);
  });

  it('should create an instance', () => {
    expect(assignMap).toBeTruthy();
  });

  it('should init data', () => {
    expect(assignMap.buildingList).toBeDefined();
    expect(assignMap.mapList).toBeDefined();
  });

});
