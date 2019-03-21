import {ViewMapServerModel} from './view-map-server.model';
import {LeafletMethods} from '../../core/statics/leaflet-methods';
import {LatLngTuple} from 'leaflet';
import {Item} from '../../core/models/items/item';
import {LeafletMap} from '../../core/models/map-details/leaflet.map';

export class ViewMapModel {

  leafletMap: LeafletMap;

  constructor(viewMapServer: ViewMapServerModel) {
    const mapOptions = LeafletMethods.convertMapToMapOptions(viewMapServer.mapData);
    const bounds: LatLngTuple[] = LeafletMethods.getMapBounds(viewMapServer.mapData);
    const layers = viewMapServer.items.map((item: Item) => {
      return LeafletMethods.convertGeneral(item);
    });
    this.leafletMap = {
      mapOptions,
      bounds,
      layers
    };
  }
}
