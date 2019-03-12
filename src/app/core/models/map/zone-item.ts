import {Item} from './item';
import {PointData} from './point-data';


export interface ZoneItem extends Item {
  pointsOnMap: PointData[];
  zoneName: string;
}
