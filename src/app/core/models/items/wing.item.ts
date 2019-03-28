import {Item} from './item';
import {WingMapItem} from './wing-map.item';

export interface WingItem extends Item {
  wingName: string;
  map: WingMapItem;
  sequence: number;
}
