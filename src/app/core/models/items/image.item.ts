import {Item} from './item';
import {PointMap} from '../map-details/point.map';

export interface ImageItem extends Item {
  imageUrl: string;
  imageLocation: PointMap;
  width: number;
  height: number;
}
