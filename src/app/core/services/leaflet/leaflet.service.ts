import {Injectable} from '@angular/core';
import {ZoneItem} from '../../models/map/zone-item';
import {icon, LatLngTuple, Layer, LayerOptions, marker, MarkerOptions, polygon, PolylineOptions} from 'leaflet';
import {PointData} from '../../models/map/point-data';
import {ImageItem} from '../../models/map/image-item';
import {Item} from '../../models/map/item';

@Injectable({
  providedIn: 'root'
})
export class LeafletService {

  zoneConvertor = (zoneItem: ZoneItem, options?: PolylineOptions) => {
    const points: LatLngTuple[] = zoneItem.pointsOnMap.map((pointData: PointData) =>
      [pointData.x, pointData.y] as LatLngTuple);
    const polygonLeaflet = polygon(points, options);
    if (zoneItem.zoneName) {
      polygonLeaflet.bindTooltip(zoneItem.zoneName,
        {permanent: true, direction: 'center', opacity: 0});
    }
    return polygonLeaflet;
  }
  /**
   *
   * @param imageItem
   * @param options
   */
  imageConvertor = (imageItem: ImageItem, options?: MarkerOptions) => {
    const point: LatLngTuple = [imageItem.imageLocation.x, imageItem.imageLocation.y];
    const iconLeaflet = icon({
      iconUrl: imageItem.imageUrl,
      iconSize: [imageItem.width, imageItem.height]
    });
    const markerOptions: MarkerOptions = {
      icon: iconLeaflet
    };
    const marketLeaflet = marker(point, {...options, ...markerOptions});
    return marketLeaflet;
  }

  convertors = new Map<string, (Item, LayerOptions?) => Layer>([
    ['zone', this.zoneConvertor],
    ['fixed', this.imageConvertor]
  ]);

  constructor() {
  }

  converItems(item: Item, options?: LayerOptions) {

  }
}
