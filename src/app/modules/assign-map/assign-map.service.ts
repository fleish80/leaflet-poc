import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AssignMap} from './assign-map.model';
import {BuildingItem} from '../../core/models/items/building.item';
import {MapItem} from './map-item/map-item.model';

export const assignMapUrl = '/asset-manager-web/rest/assign-map-rest';

@Injectable({
  providedIn: 'root'
})
export class AssignMapService {

  constructor(private http: HttpClient, @Inject('window') private window: Window) {
  }

  /**
   * Retrieves all needed base data to display the assign map details
   */
  load(): Observable<AssignMap> {
    const parent = this.window.parent as any;
    const editedCampus = parent.frommap_getEditedCampus();
    const selectedCampus = parent.frommap_getSelectedBuilding();
    let selectedFloor = parent.frommap_getSelectedFloor();
    if (selectedFloor) {
      selectedFloor = parseInt(selectedFloor, 10);
    }
    const url = `${assignMapUrl}/load-campus-data/${editedCampus}/${selectedCampus}`;
    return this.http.get(url).pipe(
      map((data: { building: BuildingItem, availableMaps: MapItem[] }) =>
        new AssignMap(data, selectedFloor))
    );
  }

  /**
   * Moves map from building to maps list and retrieves the all needed base data to display the assign map details
   * @param mapId - map id which will be moved from building to maps list
   */
  remove(mapId: string): Observable<AssignMap> {
    const url = `${assignMapUrl}/remove-map/${mapId}`;
    return this.http.get(url).pipe(
      map((data: { building: BuildingItem, availableMaps: MapItem[] }) => new AssignMap(data))
    );
  }

  assign(mapId: string, wingId: string, fromList: boolean) {
    const url = `${assignMapUrl}/assign-map/${mapId}/${wingId}/${fromList ? 1 : 0}`;
    return this.http.get(url).pipe(
      map((data: { building: BuildingItem, availableMaps: MapItem[] }) => new AssignMap(data))
    );
  }


}
