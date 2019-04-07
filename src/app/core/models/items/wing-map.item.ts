import {Item} from './item';

export interface WingMapItem extends Item {
  mapName: string;
  gatewayGroup: string;
  engineId: string;
  hierarchy: string;
}
