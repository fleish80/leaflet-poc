import {Item} from './item';

export interface WingItem extends Item {
  mapName?: string;
  gatewayGroup?: string;
  engineId?: string;
  hierarchy?: string;
  pendingDeletion?: boolean;
}
