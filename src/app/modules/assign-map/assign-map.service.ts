import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AssignMapModel} from './assign-map.model';

// const assignMapUrl = '/assets//mocks/assign-map/assign-map.json';
// const assignMapUrl = 'http://localhost:80/asset-manager-web/rest/fixed-asset-rest/';
const assignMapUrl = '/asset-manager-web/unsecured/assign-map/assets//mocks/assign-map/assign-map.json';
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
    return this.http.get<AssignMapModel>(assignMapUrl).pipe(
      map((data: any) => new AssignMapModel(data))
    );
  }
}
