import {ZoneItem} from '../models/map/zone-item';
import {
  CRS,
  icon,
  imageOverlay,
  LatLngTuple,
  Layer,
  LayerOptions,
  MapOptions,
  Marker,
  marker,
  MarkerOptions,
  Polygon,
  polygon,
  PolylineOptions
} from 'leaflet';
import {PointData} from '../models/map/point-data';
import {ImageItem} from '../models/map/image-item';
import {Item} from '../models/map/item';
import {MapData} from '../models/map/map-data';

/**
 * Converts items which arrives from servers to leaflet items, each method is defined as static
 */
export class LeafletMethods {

  static converters = new Map<string, (Item, LayerOptions?) => Layer>([
    ['zone', LeafletMethods.convertZoneToPolygon],
    ['fixed', LeafletMethods.convertImageToMarker]
  ]);

  /**
   * Converts item to leaflet item, used when item type is unknown
   * @param item - item as it arrives from server
   * @param options = leaflet options
   */
  static convertGeneral(item: Item, options?: LayerOptions): Layer {
    const regex = /^([A-Za-z]+)-?\d*/g;
    const match = regex.exec(item.id);
    const convertorKey = match[1].toLowerCase();
    const convertorCallback = LeafletMethods.converters.get(convertorKey);
    return convertorCallback(item, options);
  }

  /**
   * Converts zone item to leaflet polygon
   * @param zoneItem - zone item as it arrives from server
   * @param options = leaflet polyline options
   */
  static convertZoneToPolygon(zoneItem: ZoneItem, options?: PolylineOptions): Polygon {
    const points: LatLngTuple[] = zoneItem.pointsOnMap.map((pointData: PointData) =>
      [pointData.x, pointData.y] as LatLngTuple);
    const polylineOptions: PolylineOptions = {
      color: zoneItem.itemBackground
    };
    const polygonLeaflet = polygon(points, {...polylineOptions, ...options});

    if (zoneItem.zoneName) {
      polygonLeaflet.bindTooltip(zoneItem.zoneName,
        {permanent: true, direction: 'center'});
    }
    return polygonLeaflet;
  }

  /**
   * Converts image item to leaflet marker
   * @param imageItem - image item as it arrives from server
   * @param options - leaflet marker options
   */
  static convertImageToMarker(imageItem: ImageItem, options?: MarkerOptions): Marker {
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

  static convertMapToMapOptions(mapData: MapData): MapOptions {
    const bounds: LatLngTuple[] = LeafletMethods.getMapbounds(mapData);
    const io = imageOverlay(mapData.mapImageURL, bounds);
    return {
      layers: [
        io
      ],
      minZoom: -3,
      maxZoom: 3,
      crs: CRS.Simple,
      attributionControl: false,
      center: [0, 0]
    };
  }

  static getMapbounds(mapData: MapData): LatLngTuple[] {
    return [[0, 0], [mapData.mapHeight, mapData.mapWidth]];
  }
}
