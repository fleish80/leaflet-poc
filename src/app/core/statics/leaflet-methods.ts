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
import {Item} from '../models/items/item';
import {PointMap} from '../models/map-details/point.map';
import {ImageItem} from '../models/items/image.item';
import {ZoneItem} from '../models/items/zone.item';
import {ConstructionMap} from '../models/map-details/construction.map';


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
    const points: LatLngTuple[] = zoneItem.pointsOnMap.map((pointData: PointMap) =>
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

  static convertMapToMapOptions(constructionMap: ConstructionMap): MapOptions {
    const bounds: LatLngTuple[] = LeafletMethods.getMapBounds(constructionMap);
    const io = imageOverlay(constructionMap.imageUrl, bounds);
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

  static getMapBounds(constructionMap: ConstructionMap): LatLngTuple[] {
    return [[0, 0], [constructionMap.mapHeight, constructionMap.mapWidth]];
  }
}
