import {PointData} from './point-data';

export interface MapData {
  mapWidth?: number;
  mapHeight?: number;
  bottomLeftCorner?: PointData;
  topRightCorner?: PointData;
  mapImageURL?: string;
}
