import {BuildingList} from './building-list';

describe('BuildingList', () => {

  let buildingListData;
  let buildingList: BuildingList;

  beforeEach(() => {
    buildingListData = require('./building-list.json');
    buildingList = new BuildingList(buildingListData, ['id1', 'id2'], 5);
  });

  it('should create an instance', () => {
    expect(buildingList).toBeTruthy();
  });

  it('should set  connectedTo drop list', () => {
    expect(buildingList.buildingItem).toEqual(require('./building-item.json'));
  });

  it('should update selectedFloor', () => {
    expect(buildingList.selectedFloor).toEqual(5);
  });
});
