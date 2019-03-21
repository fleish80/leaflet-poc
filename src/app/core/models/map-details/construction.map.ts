import {PointMap} from './point.map';

export interface ConstructionMap {
  mapWidth?: number;
  mapHeight?: number;
  bottomLeftCorner?: PointMap;
  topRightCorner?: PointMap;
  imageUrl?: string;
}
