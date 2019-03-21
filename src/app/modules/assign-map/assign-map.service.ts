import {Injectable} from '@angular/core';
import {AssignMap} from './assign-map.model';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

const assignMapUrl = '/assets//mocks/assign-map/assign-map.json';

@Injectable({
  providedIn: 'root'
})
export class AssignMapService {

  constructor(private http: HttpClient) {
  }

  get(): Observable<AssignMap> {
    return this.http.get<AssignMap>(assignMapUrl).pipe(
      map((data: any) => new AssignMap(data.building, data.availableMaps))
    );
  }
}
