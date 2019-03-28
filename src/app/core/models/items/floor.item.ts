import {Item} from './item';

export interface FloorItem extends Item {
  floorName: string;
  sequence: number;
}
