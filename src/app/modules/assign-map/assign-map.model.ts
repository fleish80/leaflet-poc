import {MapListModel} from './map-list/map-list.model';
import {WingItem} from '../../core/models/items/wing.item';
import {BuildingItem} from '../../core/models/items/building.item';

export class AssignMapModel {

  buildingItem: BuildingItem;
  mapList: MapListModel;

  constructor(data: any) {
    this.buildingItem = data.building;
    this.mapList = new MapListModel(data.availableMaps as WingItem[]);
  }

}
