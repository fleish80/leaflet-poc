import {Control, LatLngTuple, Layer, MapOptions} from 'leaflet';
import 'leaflet-draw';

export interface LeafletMap {
  mapOptions?: MapOptions;
  bounds?: LatLngTuple[];
  layers?: Layer[];
  drawConstructorOptions?: Control.DrawConstructorOptions;
}
