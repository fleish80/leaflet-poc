import {Control, LatLngTuple, Layer, MapOptions} from 'leaflet';

export interface LeafletMap {
  mapOptions?: MapOptions;
  bounds?: LatLngTuple[];
  layers?: Layer[];
  drawConstructorOptions?: Control.DrawConstructorOptions;
}
