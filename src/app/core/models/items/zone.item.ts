import {Item} from './item';
import {PointMap} from '../map-details/point.map';


export interface ZoneItem extends Item {
  pointsOnMap: PointMap[];
  zoneName: string;
}
