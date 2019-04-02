import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AssignMap} from './assign-map.model';

// const assignMapUrl = '/assets/mocks/assign-map/assign-map.json';
const assignMapUrl = 'http://localhost/asset-manager-web/rest/assign-map-rest/load-data';
// const assignMapUrl = '/asset-manager-web/unsecured/assign-map/assets/mocks/assign-map/assign-map.json';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class AssignMapService {

  constructor(private http: HttpClient, @Inject('window') private window: Window) {
  }

  get(): Observable<AssignMap> {
    const mapId = (this.window.parent as any).frommap_getSelectedBuilding();
    const wingId = (this.window.parent as any).frommap_getSelectedFloor();
    let url = `${assignMapUrl}/${mapId}`;
    if (wingId) {
      url = `${url};${wingId}`;
    }
    return this.http.get<AssignMap>(url, httpOptions).pipe(
      map((data: any) => new AssignMap(data))
    );
  }
}
