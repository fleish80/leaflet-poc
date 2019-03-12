import {Item} from './item';
import {PointData} from './point-data';

export interface ImageItem extends Item {
  imageUrl: string;
  imageLocation: PointData;
  width: number;
  height: number;
}
