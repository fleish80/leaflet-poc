import {MapData} from '../../core/models/map/map-data';
import {Item} from '../../core/models/map/item';

export interface ViewMapServerModel {
  mapData: MapData;
  items: Item[];
}
