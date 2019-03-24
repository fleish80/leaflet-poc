import {Injectable} from '@angular/core';
import {interval, Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, switchMap, take, timeout} from 'rxjs/operators';
import {AssignMapModel} from './assign-map.model';

const assignMapUrl = '/assets/mocks/assign-map/assign-map.json';
// const assignMapUrl = 'http://localhost/asset-manager-web/rest/assign-map-rest/load-data/()%3B()';
// const assignMapUrl = '/asset-manager-web/unsecured/assign-map/assets/mocks/assign-map/assign-map.json';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  withCredentials: true
};


@Injectable({
  providedIn: 'root'
})
export class AssignMapService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<AssignMapModel> {
    return this.http.get<AssignMapModel>(assignMapUrl, httpOptions).pipe(
      map((data: any) => new AssignMapModel(data))
    );
  }
}
