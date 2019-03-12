import {LeafletData} from '../../core/models/map/leaflet-data';
import {ViewMapServerModel} from './view-map-server.model';
import {LeafletMethods} from '../../core/statics/leaflet-methods';
import {LatLngTuple} from 'leaflet';
import {Item} from '../../core/models/map/item';

export class ViewMapModel {

  leafletData: LeafletData;

  constructor(viewMapServer: ViewMapServerModel) {
    const mapOptions = LeafletMethods.convertMapToMapOptions(viewMapServer.mapData);
    const bounds: LatLngTuple[] = LeafletMethods.getMapbounds(viewMapServer.mapData);
    const layers = viewMapServer.items.map((item: Item) => {
      return LeafletMethods.convertGeneral(item);
    });
    this.leafletData = {
      mapOptions,
      bounds,
      layers
    };
  }
}
