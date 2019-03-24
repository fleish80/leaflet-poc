import {MapListModel} from './map-list/map-list.model';
import {WingItem} from '../../core/models/items/wing.item';

export class AssignMapModel {

  mapList: MapListModel;

  constructor(data: any) {
    this.mapList = new MapListModel(data.availableMaps as WingItem[]);
  }

}
