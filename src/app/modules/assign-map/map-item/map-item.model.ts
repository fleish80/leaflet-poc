import {WingMapItem} from '../../../core/models/items/wing-map.item';

export interface MapItem extends WingMapItem {
  cdkDropListConnectedTo: string[];
}
