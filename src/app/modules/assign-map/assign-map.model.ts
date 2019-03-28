import {MapListModel} from './map-list/map-list.model';
import {BuildingItem} from '../../core/models/items/building.item';
import {WingMapItem} from '../../core/models/items/wing-map.item';

export class AssignMapModel {

  buildingItem: BuildingItem;
  mapList: MapListModel;

  constructor(data: any) {
    this.buildingItem = data.building;
    this.mapList = new MapListModel(data.availableMaps as WingMapItem[]);
  }

}
