import {Control, LatLngTuple, Layer, MapOptions} from 'leaflet';

export interface LeafletData {
  mapOptions?: MapOptions;
  bounds?: LatLngTuple[];
  layers?: Layer[];
  drawConstructorOptions?: Control.DrawConstructorOptions;
}
