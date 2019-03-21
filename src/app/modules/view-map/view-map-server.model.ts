import {ConstructionMap} from '../../core/models/map-details/construction.map';
import {Item} from '../../core/models/items/item';

export interface ViewMapServerModel {
  mapData: ConstructionMap;
  items: Item[];
}
