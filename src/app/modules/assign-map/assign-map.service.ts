import {Inject, Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AssignMap} from './assign-map.model';
import {BuildingItem} from '../../core/models/items/building.item';
import {MapItem} from './map-item/map-item.model';
import {TranslateService} from '../../core/services/translate/translate.service';
import {TranslatePipe} from '../../core/pipes/translate/translate.pipe';

// const assignMapUrl = '/assets/mocks/assign-map/assign-map.json';
const assignMapUrl = '/asset-manager-web/rest/assign-map-rest/load-campus-data';
// const assignMapUrl = '/asset-manager-web/unsecured/assign-map/assets/mocks/assign-map/assign-map.json';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class AssignMapService {

  constructor(private http: HttpClient, @Inject('window') private window: Window, private translatePipe: TranslatePipe) {
  }

  get(): Observable<AssignMap> {
    const parent = this.window.parent as any;
    const mapId = parent.frommap_getSelectedBuilding();
    const wingId = parent.frommap_getSelectedFloor() || 0;
    const url = `${assignMapUrl}/${mapId}/${wingId}`;
    // const url = assignMapUrl;
    return combineLatest(this.http.get(url, httpOptions), this.translatePipe.transform('no_hierarchy')).pipe(
      map(([data, noHierarchyKey]) => new AssignMap(data as { building: BuildingItem, availableMaps: MapItem[] }, noHierarchyKey))
    );




  }
}
