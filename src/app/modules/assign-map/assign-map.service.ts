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
const loadCampusDataUrl = '/asset-manager-web/rest/assign-map-rest/load-campus-data';
// const assignMapUrl = '/asset-manager-web/unsecured/assign-map/assets/mocks/assign-map/assign-map.json';
const removeMapUrl = '/asset-manager-web/rest/assign-map-rest/removeMap';
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

  loadCampusData(): Observable<AssignMap> {
    const parent = this.window.parent as any;
    const editedCampus = parent.frommap_getEditedCampus();
    const selectedCampus = parent.frommap_getSelectedBuilding();
    const url = `${loadCampusDataUrl}/${editedCampus}/${selectedCampus}`;
    // const url = assignMapUrl;
    return this.http.get(url).pipe(
      map((data: { building: BuildingItem, availableMaps: MapItem[] }) => new AssignMap(data))
    );
  }

  removeMap(mapIdString: string): Observable<AssignMap> {
    const url = `${removeMapUrl}/${mapIdString}}`;
    return this.http.get(url).pipe(
      map((data: { building: BuildingItem, availableMaps: MapItem[] }) => new AssignMap(data))
    );
  }
}
